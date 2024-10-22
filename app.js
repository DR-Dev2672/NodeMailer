 
 const sendMail =require("./smtpServer")
const express=require("express");

const app=express();



app.get('/',(req,res)=>{
    res.send("welcome from server")
    console.log("this is server")
})

app.get('/sendMail',sendMail)

app.listen(3000,()=>{
    console.log("server is ready")
})
