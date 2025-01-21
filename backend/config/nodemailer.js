require('dotenv').config();
const nodemailer = require('nodemailer');


// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // or any email service you use
  auth: {
    user: process.env.EMAIL_USER, // your email address from .env
    pass: process.env.EMAIL_PASS, // your email password or app-specific password from .env
  },
});

module.exports = transporter;
