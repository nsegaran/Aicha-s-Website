const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');

// Set up middleware to parse incoming request bodies as JSON
app.use(express.json());

app.use(cors()); 

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

// Define an endpoint to handle the form submission
app.post('/send-emails', (req, res) => {
  const { email, name, message } = req.body;

  // Set up a nodemailer transport for sending the email
  const transporter = nodemailer.createTransport({
    // Configure your email service provider here
    service: 'Gmail',
    auth: {
      user: 'abdoulayeachia@gmail.com',
      pass: 'nyehqsgmjxeuasyr',
    },
  });

  // Set up the email content
  const mailOptions = {
    from: email,
    to: 'abdoulayeachia@gmail.com.com',
    subject: 'New contact form submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'An error occurred while sending the email.' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully.' });
    }
  });
});

// Start the server
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log('Server is running on port {$port}');
});
