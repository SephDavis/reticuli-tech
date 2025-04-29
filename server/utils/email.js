// utils/email.js
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');

/**
 * Email utility for sending various types of emails
 */
class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `Reticuli Technologies <${process.env.EMAIL_FROM}>`;
  }

  /**
   * Create transporter based on environment
   * @returns {Object} Nodemailer transporter
   */
  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      // Use SendGrid or another service in production
      return nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD
        }
      });
    }

    // Use mailtrap or nodemailer in development
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }

  /**
   * Read and compile email template
   * @param {String} templateName - Name of the template file
   * @param {Object} data - Data to inject into the template
   * @returns {String} Compiled HTML
   */
  async compileTemplate(templateName, data) {
    try {
      const templatePath = path.join(__dirname, '../templates/emails', `${templateName}.html`);
      const source = fs.readFileSync(templatePath, 'utf-8');
      const template = handlebars.compile(source);
      return template(data);
    } catch (error) {
      console.error('Template error:', error);
      // Fallback to simple text if template fails
      return `
        <h1>Hello ${this.firstName}</h1>
        <p>${data.message || 'Thank you for contacting Reticuli Technologies.'}</p>
        ${this.url ? `<p><a href="${this.url}">Click here</a></p>` : ''}
        <p>Regards,<br>Reticuli Technologies Team</p>
      `;
    }
  }

  /**
   * Send an email
   * @param {String} template - Template name
   * @param {String} subject - Email subject
   * @param {Object} data - Data to pass to the template
   */
  async send(template, subject, data = {}) {
    // 1) Render HTML based on a template
    const html = await this.compileTemplate(template, {
      firstName: this.firstName,
      url: this.url,
      subject,
      ...data
    });

    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: this.convertHtmlToText(html) // Fallback for email clients that don't support HTML
    };

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  /**
   * Simple HTML to text converter
   * @param {String} html - HTML content
   * @returns {String} Plain text
   */
  convertHtmlToText(html) {
    return html
      .replace(/<style[^>]*>.*?<\/style>/g, '')
      .replace(/<script[^>]*>.*?<\/script>/g, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s{2,}/g, ' ')
      .trim();
  }

  /**
   * Send welcome email
   */
  async sendWelcome() {
    await this.send('welcome', 'Welcome to Reticuli Technologies');
  }

  /**
   * Send password reset email
   */
  async sendPasswordReset() {
    await this.send(
      'passwordReset', 
      'Your password reset token (valid for 10 minutes)',
      { resetUrl: this.url }
    );
  }

  /**
   * Send contact form confirmation
   * @param {String} message - Contact form message
   */
  async sendContactConfirmation(message) {
    await this.send(
      'contactConfirmation',
      'We received your message',
      { message }
    );
  }

  /**
   * Send notification to admin about new contact form submission
   * @param {Object} contactData - Contact form data
   */
  async sendContactNotification(contactData) {
    await this.send(
      'contactNotification',
      `New contact form submission: ${contactData.subject || 'Contact Form'}`,
      { 
        contactData,
        adminUrl: `${process.env.ADMIN_URL}/contacts/${contactData._id}`
      }
    );
  }

  /**
   * Send order/quote confirmation
   * @param {Object} orderData - Order/quote data
   */
  async sendOrderConfirmation(orderData) {
    await this.send(
      'orderConfirmation',
      `Your order confirmation - ${orderData.reference}`,
      { orderData }
    );
  }
}

module.exports = Email;