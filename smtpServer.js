
const nodemailer = require("nodemailer");


const sendMail=(req,res)=>{
 console.log("this is sendMail function")
 const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'darrel67@ethereal.email',
        pass: 'TD7NpbpxF4Aq3d2VNp'
    }
});
  
  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Dev Server side 👻" <Devsever@gmail.com>', // sender address
      to: " rdev2672@gmail.com", // list of receivers
      subject: "stmp server testing", // Subject line
      text: "Hello from server", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    res.send(info);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
  
  main().catch(console.error);
}

module.exports =sendMail;


