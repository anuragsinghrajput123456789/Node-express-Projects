const nodemailer = require("nodemailer");

const sendEmail = async (to, messageContent) => {
  try {
    //create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: 1 / 7,
      auth: {
        user: "anuragsinghj678@gmail.com",
        pass: "",
      },
    });
    //message obj
    const message = {
      to,
      subject: "New message from Nodemailer app",
      html: `<h3>You have recieved a new message from Nodemailer APP</h3>
         <p>${messageContent}</p>`,
    };
    //send the email
    const info = transporter.sendMail(message);
    console.log(`Message sent`, info.messageId);
  } catch (error) {
    console.log(error);
    throw new Error("Email could not be sent");
  }
};

module.exports = sendEmail;
