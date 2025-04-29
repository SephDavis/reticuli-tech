// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

// Model
const Contact = require('../models/Contact');

// @route   POST api/contact
// @desc    Submit a contact form
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('message', 'Message is required').not().isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message, phone, company, subject } = req.body;

    try {
      // Create new contact
      const newContact = new Contact({
        name,
        email,
        message,
        phone: phone || '',
        company: company || '',
        subject: subject || 'Website Contact Form'
      });

      // Save to database
      const contact = await newContact.save();

      // Configure email transport
      // NOTE: In production, you would use your actual SMTP credentials
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      // Email content
      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: `New Contact Form: ${subject || 'Website Contact'}`,
        text: `
          Name: ${name}
          Email: ${email}
          ${phone ? `Phone: ${phone}` : ''}
          ${company ? `Company: ${company}` : ''}
          
          Message:
          ${message}
        `,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
      };

      // Send email
      // NOTE: For development, you can comment this out to avoid sending emails during testing
      if (process.env.NODE_ENV === 'production') {
        await transporter.sendMail(mailOptions);
      }

      res.status(201).json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;