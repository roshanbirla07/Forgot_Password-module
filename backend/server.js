require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const resetPasswordRoute = require('./routes/resetPassword');
const app = express();
const cors = require('cors')
const PORT = process.env.PORT;

// Enable CORS for all origins (or customize as needed)
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

// Use the reset password route
app.use('/api', resetPasswordRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
