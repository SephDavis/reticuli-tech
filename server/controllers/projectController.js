// controllers/projectController.js
const path = require('path');
const fs = require('fs');
const Project = require('../models/Project');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');
const slugify = require('slugify');
const cloudinary = require('../config/cloudinary');

/**
 * @desc    Get all projects
 * @route   GET /api/projects
 * @access  Public
 */
exports.getProjects = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single project
 * @route   GET /api/projects/:id
 * @access  Public
 */
exports.getProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(
      new ErrorResponse(`Project not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: project
  });
});

/**
 * @desc    Get project by slug
 * @route   GET /api/projects/slug/:slug
 * @access  Public
 */
exports.getProjectBySlug = asyncHandler(async (req, res, next) => {
  const project = await Project.findOne({ slug: req.params.slug });

  if (!project) {
    return next(
      new ErrorResponse(`Project not found with slug of ${req.params.slug}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: project
  });
});

/**
 * @desc    Create new project
 * @route   POST /api/projects
 * @access  Private/Admin
 */
exports.createProject = asyncHandler(async (req, res, next) => {
  // Add user to req.body
  req.body.user = req.user.id;

  // Generate slug from title
  if (req.body.title) {
    req.body.slug = slugify(req.body.title, { lower: true });
  }

  // Create project
  const project = await Project.create(req.body);

  res.status(201).json({
    success: true,
    data: project
  });
});

/**
 * @desc    Update project
 * @route   PUT /api/projects/:id
 * @access  Private/Admin
 */
exports.updateProject = asyncHandler(async (req, res, next) => {
  let project = await Project.findById(req.params.id);

  if (!project) {
    return next(
      new ErrorResponse(`Project not found with id of ${req.params.id}`, 404)
    );
  }

  // Generate new slug if title is updated
  if (req.body.title) {
    req.body.slug = slugify(req.body.title, { lower: true });
  }

  // Update timestamps
  req.body.updatedAt = Date.now();
  req.body.updatedBy = req.user.id;

  // Update project
  project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: project
  });
});

/**
 * @desc    Delete project
 * @route   DELETE /api/projects/:id
 * @access  Private/Admin
 */
exports.deleteProject = asyncHandler(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(
      new ErrorResponse(`Project not found with id of ${req.params.id}`, 404)
    );
  }

  // Delete associated image files from Cloudinary if they exist
  if (project.thumbnail && project.thumbnail.includes('cloudinary')) {
    const publicId = project.thumbnail.split('/').pop().split('.')[0];
    await cloudinary.uploader.destroy(publicId);
  }

  if (project.gallery && project.gallery.length > 0) {
    for (const image of project.gallery) {
      if (image.includes('cloudinary')) {
        const publicId = image.split('/').pop().split('.')[0];
        await cloudinary.uploader.destroy(publicId);
      }
    }
  }

  await project.remove();

  res.status(200).json({
    success: true,
    data: {}
  });
});

/**
 * @desc    Upload project thumbnail
 * @route   PUT /api/projects/:id/thumbnail
 * @access  Private/Admin
 */
exports.projectThumbnailUpload = asyncHandler(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(
      new ErrorResponse(`Project not found with id of ${req.params.id}`, 404)
    );
  }

  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file`, 400));
  }

  const file = req.files.file;

  // Make sure the image is a photo
  if (!file.mimetype.startsWith('image')) {
    return next(new ErrorResponse(`Please upload an image file`, 400));
  }

  // Check filesize
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Please upload an image less than ${process.env.MAX_FILE_UPLOAD / 1000000} MB`,
        400
      )
    );
  }

  // If using Cloudinary
  const result = await cloudinary.uploader.upload(file.tempFilePath, {
    folder: 'projects',
    width: 1280,
    crop: 'scale'
  });

  // Update project with thumbnail
  await Project.findByIdAndUpdate(req.params.id, {
    thumbnail: result.secure_url,
    updatedAt: Date.now(),
    updatedBy: req.user.id
  });

  res.status(200).json({
    success: true,
    data: result.secure_url
  });
});

/**
 * @desc    Upload project gallery images
 * @route   PUT /api/projects/:id/gallery
 * @access  Private/Admin
 */
exports.projectGalleryUpload = asyncHandler(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(
      new ErrorResponse(`Project not found with id of ${req.params.id}`, 404)
    );
  }

  if (!req.files) {
    return next(new ErrorResponse(`Please upload files`, 400));
  }

  const files = Array.isArray(req.files.files) 
    ? req.files.files 
    : [req.files.files];

  const galleryUrls = [];

  // Process each file
  for (const file of files) {
    // Make sure the image is a photo
    if (!file.mimetype.startsWith('image')) {
      return next(new ErrorResponse(`Please upload only image files`, 400));
    }

    // Check filesize
    if (file.size > process.env.MAX_FILE_UPLOAD) {
      return next(
        new ErrorResponse(
          `Please upload images less than ${process.env.MAX_FILE_UPLOAD / 1000000} MB each`,
          400
        )
      );
    }

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: 'projects/gallery',
      width: 1920,
      crop: 'scale'
    });

    galleryUrls.push(result.secure_url);
  }

  // Update project with gallery images
  // Add to existing gallery array rather than replacing it
  await Project.findByIdAndUpdate(req.params.id, {
    $push: { gallery: { $each: galleryUrls } },
    updatedAt: Date.now(),
    updatedBy: req.user.id
  });

  res.status(200).json({
    success: true,
    count: galleryUrls.length,
    data: galleryUrls
  });
});

/**
 * @desc    Remove gallery image
 * @route   DELETE /api/projects/:id/gallery/:imageId
 * @access  Private/Admin
 */
exports.removeGalleryImage = asyncHandler(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(
      new ErrorResponse(`Project not found with id of ${req.params.id}`, 404)
    );
  }

  // Find the image URL in the gallery
  const imageUrl = project.gallery.find(url => 
    url.includes(req.params.imageId)
  );

  if (!imageUrl) {
    return next(
      new ErrorResponse(`Image not found in project gallery`, 404)
    );
  }

  // Remove from Cloudinary if applicable
  if (imageUrl.includes('cloudinary')) {
    const publicId = `projects/gallery/${req.params.imageId}`;
    await cloudinary.uploader.destroy(publicId);
  }

  // Remove from project gallery
  await Project.findByIdAndUpdate(req.params.id, {
    $pull: { gallery: imageUrl },
    updatedAt: Date.now(),
    updatedBy: req.user.id
  });

  res.status(200).json({
    success: true,
    data: {}
  });
});

/**
 * @desc    Get featured projects
 * @route   GET /api/projects/featured
 * @access  Public
 */
exports.getFeaturedProjects = asyncHandler(async (req, res, next) => {
  const projects = await Project.find({ featured: true })
    .sort({ createdAt: -1 })
    .limit(4);

  res.status(200).json({
    success: true,
    count: projects.length,
    data: projects
  });
});

/**
 * @desc    Get projects by category
 * @route   GET /api/projects/category/:categorySlug
 * @access  Public
 */
exports.getProjectsByCategory = asyncHandler(async (req, res, next) => {
  const projects = await Project.find({ 
    categorySlug: req.params.categorySlug 
  });

  res.status(200).json({
    success: true,
    count: projects.length,
    data: projects
  });
});