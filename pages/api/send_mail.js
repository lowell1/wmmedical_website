const nodemailer = require("nodemailer");
require("dotenv").config();

export default (request, response) => {
  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.SMTP_AUTH_USER,
      pass: process.env.SMTP_AUTH_PASS
    }
  });

  var mailOptions = {
    from: `"${request.body.name}" <${request.body.email}>`,
    to: process.env.EMAIL_TO_ADDRESS,
    subject: `Message from ${request.body.name}`,
    text: request.body.message
  };

  return new Promise(resolve => {
    transport.verify(error => {
      if(error) {
        response.status(500).json(error);
        resolve();
      } else {
        transport.sendMail(mailOptions, error => {
          error ? response.status(500).json(error) : response.status(200).end();
          return resolve();
        });
      }
    });
  })
}