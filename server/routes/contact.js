// File: /pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, organization, phone, message, interest } = req.body;
    
    // Validation
    if (!name || !email || !message || !interest) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // Set up email transporter
    // For production, use your actual email service credentials
    // This example uses Nodemailer with a test SMTP service
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Set up email content
    const interestOptions = {
      'threat-intelligence': 'OSINT Threat Intelligence SaaS',
      'neuromorphic-xdr': 'Neuromorphic XDR',
      'blacklock': 'BlackLock Encryption',
      'neuromorphic-cloud': 'Neuromorphic Cloud Computing',
      'air-gapped-ids': 'Air-Gapped IDS Systems',
      'general': 'General Inquiry'
    };

    // Format the email content
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Organization:</strong> ${organization || 'Not provided'}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Area of Interest:</strong> ${interestOptions[interest] || interest}</p>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>This message was sent from the website contact form at ${new Date().toLocaleString()}</small></p>
    `;

    // Configure and send the email
    const mailOptions = {
      from: `"Reticuli Tech Website" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO, // Your notification email
      replyTo: email, // Set reply-to as the sender's email for easy response
      subject: `Website Contact: ${interestOptions[interest] || interest}`,
      html: htmlContent,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Also send a confirmation email to the user
    const confirmationMailOptions = {
      from: `"Reticuli Tech" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: 'Thank you for contacting Reticuli Tech',
      html: `
        <h2>Thank you for contacting Reticuli Tech</h2>
        <p>Hello ${name},</p>
        <p>We have received your inquiry regarding ${interestOptions[interest] || interest}. Our team will review your message and respond shortly.</p>
        <p>For your records, here is a copy of your message:</p>
        <p style="padding: 10px; background-color: #f5f5f5;">${message.replace(/\n/g, '<br>')}</p>
        <p>If you have any further questions, please don't hesitate to contact us.</p>
        <p>Best regards,<br>The Reticuli Tech Team</p>
      `
    };

    await transporter.sendMail(confirmationMailOptions);

    // Return success
    return res.status(200).json({ 
      message: 'Form submitted successfully',
      success: true 
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({ 
      message: 'Error processing your request',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}