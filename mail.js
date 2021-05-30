const { mailTemplate } = require('./template')
const nodemailer = require('nodemailer');
module.exports.mail = async () => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'username', //emailid
            pass: 'password'
        },
    });

    let info = await transporter.sendMail({
        from: '"Tikaram Mardi👻" <noreplay@marditech.com>', // sender address
        to: "tikaram.beis.16@acharya.ac.in", // list of receivers
        subject: "Offer ✔", // Subject line
        html: mailTemplate('5/06/2021'), // html body
    });

    return info;

}