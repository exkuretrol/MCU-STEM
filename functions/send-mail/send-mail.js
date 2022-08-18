require('dotenv').config();
const nodemailer = require('nodemailer');

const handler = async (event, context, callback) => {
  const body = JSON.parse(event.body);
  const html = `<div> style="margin: 20px auto;"> ${body.html}</div>`;
  console.log(body)

  const contactEmail = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  }
  let transporter = nodemailer.createTransport(contactEmail);

  try {
    let info = await transporter.sendMail({
      from: '"問卷調查分析平台" <foo@example.com>',
      to: body.to,
      subject: body.subject,
      text: body.text,
      html: body.html
    })
    console.log(info)
    callback(null, { statusCode: 200, body: JSON.stringify(info)});
  } catch (error) {
    callback(error);
  }
}

module.exports = { handler }
