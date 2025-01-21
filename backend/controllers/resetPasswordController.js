const jwt = require('jsonwebtoken');
const transporter = require('../config/nodemailer');

const sendResetPasswordEmail = (req, res) => {
  const { email } = req.body;
  console.log(email);

  if (!email) {
    return res.status(400).send({ success: false, message: 'Email is required' });
  }

  // Validate email format using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).send({ success: false, message: 'Invalid email format' });
  }

  // Generate a reset token (valid for 1 hour)
  const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

  const resetLink = `http://localhost:5173/reset-password`;

  const mailOptions = {
    from: process.env.EMAIL_USER, // sender address from .env
    to: email, // list of receivers
    subject: 'Password Reset Request',
    text: `You have requested to reset your password. Please click on the following link to reset your password: ${resetLink}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send({ success: false, message: 'Failed to send email' });
    }

    res.status(200).send({ success: true, message: 'Reset link sent successfully' });
  });
};

module.exports = sendResetPasswordEmail;
