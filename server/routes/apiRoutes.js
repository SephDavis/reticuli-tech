// routes/apiRoutes.js
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// Models
const Project = require('../models/Project');
const Technology = require('../models/Technology');

// @route   GET api/projects
// @desc    Get all projects
// @access  Public
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ date: -1 });
    res.json(projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/projects/:id
// @desc    Get project by ID
// @access  Public
router.get('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({ msg: 'Project not found' });
    }
    
    res.json(project);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Project not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   GET api/technologies
// @desc    Get all technologies
// @access  Public
router.get('/technologies', async (req, res) => {
  try {
    const technologies = await Technology.find();
    res.json(technologies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/request-info
// @desc    Submit an information request
// @access  Public
router.post(
  '/request-info',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('company', 'Company is required').not().isEmpty(),
    check('message', 'Message is required').not().isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, company, message, phone } = req.body;

    try {
      // Here you would typically save to database and/or send an email
      // For now, we'll just simulate a successful response
      
      // TODO: Add email sending logic with nodemailer
      
      res.json({ msg: 'Information request received. We will contact you shortly.' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;