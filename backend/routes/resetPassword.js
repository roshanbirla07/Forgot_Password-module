const express = require('express');
const sendResetPasswordEmail = require('../controllers/resetPasswordController');

const router = express.Router();

// Endpoint to handle password reset request
router.post('/reset-password', sendResetPasswordEmail);  // route-controller for the email

module.exports = router;
