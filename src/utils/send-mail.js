// pages/api/send-email.js

import nodemailer from 'nodemailer';

export const sendMail=async(data)=> {
    const{recipient,subject,text,html}=data;
        // Create a transporter object using SMTP transport
        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER, // your SMTP username
                pass: process.env.SMTP_PASS, // your SMTP password
            },
        });

        // Email options
        let mailOptions = {
            from: process.env.SMTP_USER, // sender address
            to: recipient, // list of receivers
            subject: subject, // Subject line
            text: text, // plain text body
            html:html
        };

        try {
            // Send mail
            await transporter.sendMail(mailOptions);
            return true;
        } catch (error) {
            console.error('Error sending email:', error);
            return false;
        }
   
}
