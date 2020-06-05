const functions = require('firebase-functions');
const functionsEnvVar = functions.config();

const admin = require('firebase-admin');
admin.initializeApp();

const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    user: functionsEnvVar.smtp.user,
    clientId: functionsEnvVar.smtp.clientid,
    clientSecret: functionsEnvVar.smtp.clientsecret,
    refreshToken: functionsEnvVar.smtp.refreshtoken,
    expires: 1484314697598,
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
    } = snap.data();
    const mailOptions = {
      from: `NeuCommunities Website <soiamarobot@gmail.com>`,
      to: recipients,
      subject: `Contact Message from ${company}`,
      html: `<h3>From ${company}</h3>
          <h4>First Name: </h4>
          <h3>${firstName}</h3>
          <h4>Last Name: </h4>
          <h3>${lastName}</h3>
          <h4>Email: </h4>
          <h3>${email}</h3>
          <h4>Phone Number: </h4>
          <h3>${phone}</h3>
          <h4>Company: </h4>
          <h3>${company} </h3>
          <h4>Company Type: </h4>
          <h3>${companyType}</h3>
          <h4>Message: </h4>
          <h3>${message}</h3>
          <br>
          <h3>Reference No: </h3> 
          ${context.params.timestamp}`,
    };
    return transporter.sendMail(mailOptions);
  });

exports.cloudbuild = functions.https.onRequest(triggerCloudBuild);

async function triggerCloudBuild(req, res) {
  if (req.method !== 'POST') {
    return res.status(403).send('Forbidden');
  }
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith('Bearer ')
  ) {
    return res.status(403).send('Unauthorized');
  }
  const accessToken = req.headers.authorization.split('Bearer ')[1];
  if (accessToken !== functionsEnvVar.cloudbuild.accesstoken) {
    return res.status(403).send('Unauthorized');
  } else {
    // authorized to run Cloud Build
    const projectId = 'made4jonathan',
      triggerId = functionsEnvVar.cloudbuild.triggerid,
      branchName = 'master';
    const { CloudBuildClient } = require('@google-cloud/cloudbuild');
    const cb = new CloudBuildClient();
    await cb.runBuildTrigger({
      projectId,
      triggerId,
      source: {
        projectId,
        branchName,
      },
    });
    return res.status(200).send('success');
  }
}
