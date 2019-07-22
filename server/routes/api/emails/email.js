const express = require('express');
const router = express.Router();

const password = process.env.password  
const nodeMailer = require("nodemailer");
const EmailTemplate = require('email-templates').EmailTemplate;

var transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'lomashbhattarai1@gmail.com',
      pass: password
    }
  });

router.post('/', (req, res) => {
    var mailOptions = {
        from: 'lomashbhattarai1@gmail.com',
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.text
      };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.status(500).send(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).send(mailOptions)
        }
      });
    
    
})

module.exports = router