// controllers/contactController.js
const Contact = require('../models/Contact');
const Email = require('../utils/email');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

/**
 * @desc    Create a new contact message
 * @route   POST /api/contact
 * @access  Public
 */
exports.createContact = asyncHandler(async (req, res, next) => {
  const { name, email, phone, company, subject, message } = req.body;

  // Create contact in database
  const contact = await Contact.create({
    name,
    email,
    phone,
    company,
    subject: subject || 'Website Contact Form',
    message
  });

  // Send confirmation email to user
  const userEmail = new Email({ email, name }, null);
  await userEmail.sendContactConfirmation(message);

  // Send notification to admin
  const adminEmail = new Email(
    { email: process.env.EMAIL_TO, name: 'Admin' },
    `${process.env.ADMIN_URL || 'http://localhost:3000/admin'}/contacts/${contact._id}`
  );
  await adminEmail.sendContactNotification(contact);

  res.status(201).json({
    success: true,
    data: contact
  });
});

/**
 * @desc    Get all contacts
 * @route   GET /api/contact
 * @access  Private/Admin
 */
exports.getContacts = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

/**
 * @desc    Get single contact
 * @route   GET /api/contact/:id
 * @access  Private/Admin
 */
exports.getContact = asyncHandler(async (req, res, next) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    return next(
      new ErrorResponse(`Contact message not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: contact
  });
});

/**
 * @desc    Update contact status (read, in-progress, resolved, etc.)
 * @route   PUT /api/contact/:id
 * @access  Private/Admin
 */
exports.updateContact = asyncHandler(async (req, res, next) => {
  const { status, adminNotes } = req.body;
  
  let contact = await Contact.findById(req.params.id);

  if (!contact) {
    return next(
      new ErrorResponse(`Contact message not found with id of ${req.params.id}`, 404)
    );
  }

  // Update fields
  contact.status = status || contact.status;
  contact.adminNotes = adminNotes || contact.adminNotes;
  contact.lastUpdated = Date.now();
  contact.updatedBy = req.user.id;

  await contact.save();

  res.status(200).json({
    success: true,
    data: contact
  });
});

/**
 * @desc    Delete contact
 * @route   DELETE /api/contact/:id
 * @access  Private/Admin
 */
exports.deleteContact = asyncHandler(async (req, res, next) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    return next(
      new ErrorResponse(`Contact message not found with id of ${req.params.id}`, 404)
    );
  }

  await contact.remove();

  res.status(200).json({
    success: true,
    data: {}
  });
});

/**
 * @desc    Send response to contact
 * @route   POST /api/contact/:id/respond
 * @access  Private/Admin
 */
exports.respondToContact = asyncHandler(async (req, res, next) => {
  const { responseMessage, responseSubject } = req.body;
  
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    return next(
      new ErrorResponse(`Contact message not found with id of ${req.params.id}`, 404)
    );
  }

  // Send response email
  const userEmail = new Email(
    { email: contact.email, name: contact.name },
    null
  );
  
  // Use custom email template for response
  await userEmail.send(
    'contactResponse',
    responseSubject || `Re: ${contact.subject}`,
    {
      originalMessage: contact.message,
      responseMessage,
      adminName: req.user.name,
      companyName: 'Reticuli Technologies'
    }
  );

  // Update contact status
  contact.status = 'responded';
  contact.responseDate = Date.now();
  contact.responseMessage = responseMessage;
  contact.respondedBy = req.user.id;
  
  await contact.save();

  res.status(200).json({
    success: true,
    data: contact
  });
});