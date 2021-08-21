import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';
const nl2br = require('react-nl2br');

const transporter = {
    auth: {
        // Use SendGrid API key 
        api_key: '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'
    }
}

const mailer = nodemailer.createTransport(sgTransport(transporter));

export default async (req, res) => {
    //console.log(req.body)
    const {name, email, number, subject, text} = req.body;

   

    const txt = nl2br(text)
    //console.log(txt);

    const data = {
        to: 'info@lnbsydneyescorts.com.au',
        from: 'contact@lnbsydneyescorts.com.au',
        subject: `Late Night Babes Contact Form - From: ${name} | ${subject}`,
        text: txt,
        html: `
            <b>From:</b> ${name} <br /> 
            <b>Email:</b> ${email} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> <br />
            <b><u>Message:</u></b><br/> ${txt} 
        ` 
    };

    try {
        const response = await mailer.sendMail(data);
        console.log(response)
        res.status(200).send("Email send successfully")
    } catch (error) {
        console.log(error);
        res.status(500).send("Error proccessing charge");
    }
}
