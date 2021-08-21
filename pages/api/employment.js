import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';
const nl2br = require('react-nl2br');
import Config from "../../config"
import * as apikey from "../../apikey"

const transporter = {
    auth: {
        // Use SendGrid API key 
        api_key: apikey
    }
}

const mailer = nodemailer.createTransport(sgTransport(transporter));

export default async (req, res) => {
    //console.log(req.body)
    const {name, email, number, age, dressSize, location, text, files} = req.body;

 
    let images = []

    files.map((f,i)=>{
        const url = Config.url + f
    images.push(<img src={f} key={i} alt={f} />)
})


   

    const txt = nl2br(text)
    //console.log(txt);

    const data = {
        to: 'info@lnbsydneyescorts.com.au',
        from: 'employment@lnbsydneyescorts.com.au',
        subject: `Late Night Babes Employment Form - From: ${name}`,
        text: text,
        html: `
            <b>From:</b> ${name} <br /> 
            <b>Email:</b> ${email} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Age:</b> ${age} <br /> 
            <b>Dress Size:</b> ${dressSize} <br /> 
            <b>Location:</b> ${location} <br /> <br />
            <b><u>Message:</u></b><br/> ${text} <br /><br />
            <div>
            ${files.map((f,i)=>{
                <img src={f} key={i} alt={f} />
        })}</div>
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
