const nodemailer = require('nodemailer');
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const contactEmail = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
}

const transporter = nodemailer.createTransport(contactEmail)
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to send mail!');
  }
});

app.post('/contact',async (req, res) => {
  let form = req.body;
  await transporter.sendMail({
    from: '"問卷調查分析平台" <foo@example.com>',
    to: form.to,
    subject: form.subject,
    text: form.text,
    html: form.html
  })
    .catch(err => console.log(err))
    .then(info => res.status(200).send( { message: "Mail send", message_id: info.messageId}));
});

const port = 5000;
app.listen(port, () => console.log(`Express server listening on port ${port}...`));