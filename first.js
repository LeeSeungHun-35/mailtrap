const nodemailer = require('nodemailer');

const email = {
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "2945a72f6c42f6",
        pass: "********3eb6"
    }
};

const send = async (option) => {
    const transporter = nodemailer.createTransport(email);

    try {
        const info = await transporter.sendMail(option);
        console.log(info);  
        return info.response; 
    } catch (error) {
        console.log(error); 
    }
};

let emaildata = {
    from: 'ish0542@naver.com',
    to: 'ish0542@naver.com',
    subject: '테스트메일.',
    text: 'node.js nodemailer 테스트'
};

send(emaildata);
