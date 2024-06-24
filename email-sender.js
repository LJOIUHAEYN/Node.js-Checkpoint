
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-Email-@gmail.com',
        pass: 'your-password '
    }
});


const mailOptions = {
    from: 'your-Email-@gmail.com',
    to: 'your-Email-@gmail.com',
    subject: 'Test Email',
    text: 'Hello, this is a test email sent from Node.js!'
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(`Error: ${error}`);
    }
    console.log(`Email sent: ${info.response}`);
});
