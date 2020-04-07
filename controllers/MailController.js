const nodemailer = require('nodemailer');
const mailConfig = require('../configs/mail');

exports.sendMail = (req, res) => {
    let transporter = nodemailer.createTransport({
        host: mailConfig.host,
        port: mailConfig.port,
        secure: mailConfig.secure === 'true',
        auth: {
            user: mailConfig.username,
            pass: mailConfig.password
        }
    });

    transporter.sendMail({
        from: `${mailConfig.from.name} <${mailConfig.from.mail}>`,
        to: 'bill@microsoft.com',
        subject: 'Hola mundo',
        text: 'Soy Alex',
        html: '<p>Soy Alex</p>'
    })
    .then((data) => {
        res.json({ message: 'Mensaje enviado!' });
    })
    .catch(error => {
        res.json({ message: 'Mensaje no enviado!', error: error })
    })
    
  }
  