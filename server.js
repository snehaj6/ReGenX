// server.js
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/subscribe', (req, res) => {
  const { email } = req.body;

  // Configure the email transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL, // your Gmail address
      pass: process.env.APP_PASSWORD // app-specific password from Google
    }
  });
  

  // Mail options
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Newsletter Subscription',
    text: 'Thank you for subscribing to our newsletter!',
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send(`Error occurred: ${error.message}`); // Send error message to client
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Subscription successful! Check your inbox.');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
