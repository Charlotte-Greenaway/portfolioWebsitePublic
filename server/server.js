const express = require("express");

const nodemailer = require('nodemailer');
const bodyParser = require("body-parser");

//creates express app
const app = express();
const path = require("path");

//allows reading of body req
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//connects react build and renders html
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

//sends email via gmail and using app password
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'websitemailportfolio@gmail.com',
      pass: '<my password>'
    }
  });
  function sendEmail(name, email,info) {
    const mailOptions = {
      from: 'websitemailportfolio@gmail.com',
      to: 'charlottegreenaway112@gmail.com',
      subject: 'Form Submission',
      text: `name: ${name}\n email:${email}\n message:${info}`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    console.log("email sent")
  }

//allows cors
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

//handles the submission of the contact form
app.post("/submit-form", function(req, res) {
    const attributes = {};

    for (const [key, value] of req.body) {
        attributes[key] = value;
    }

    const name = attributes.name;
    const email = attributes.email;
    const message = attributes.message;
    // Process the form data as needed
    sendEmail(name,email,message);
    console.log(name,email,message);
  
    // Send a response
    res.send("Form data received successfully");
  });

  
//defines port
  const port = process.env.PORT || 5000

app.listen(port, function() {
 console.log("Server started successfully");
});