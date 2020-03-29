const functions = require('firebase-functions');
const functionsEnvVar = functions.config();

const admin = require('firebase-admin');
admin.initializeApp();

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: functionsEnvVar.smtp.user,
    pass: functionsEnvVar.smtp.pass,
  },
});
const recipients = functionsEnvVar.smtp.recipients;

exports.sendEmail = functions.firestore
  .document('contactForm/{timestamp}')
  .onCreate((snap, context) => {
    const {
      firstName,
      lastName,
      company,
      companyType,
      phone,
      message,
      email,
      profile
    } = snap.data();
    const mailOptions = {
      from: `NeuCommunities Website <soiamarobot@gmail.com>`,
      to: recipients,
      subject: `Contact Message from ${company}`,
      html: `<h1>From ${company}</h1>
          <h2>First Name: </h2>
          ${firstName},
          <h2>Last Name: </h2>
          ${lastName}
          <br>
          <h2>Email: </h2>
          ${email}
          <br>
          <h2>Phone Number: </h2>
          ${phone}
          <br>
          <h2>Company: </h2>
          ${company} 
          <h2>Company Type: </h2>
          ${companyType}
          <br>
          <h2>Message: </h2>
          <br>
          <p>${message}</p>
          <br>
          <h2>Reference No: </h2> 
          ${context.params.timestamp}
`,
    };
    return transporter.sendMail(mailOptions);
  });
