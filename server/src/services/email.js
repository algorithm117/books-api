require('dotenv').config();
const nodemailer = require('nodemailer');

// TODO -> pass in email address as parameter in order to send to correct recipient. Capture email address in input field and send to server.
async function generateApiKeyEmail(
  userEmailAddress,
  apiKey
) {
  try {
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    let info = await transporter.sendMail({
      from: 'booksapideveloper@gmail.com',
      to: userEmailAddress,
      subject: 'API Key for Books API',
      html: `<h1>API Key: ${apiKey}</h1>`,
    });
  } catch (err) {
    console.log(
      'There was an error sending the email: ',
      err
    );
  }
}

module.exports = generateApiKeyEmail;
