const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const cors = require('cors');
const OAuth2 = google.auth.OAuth2;

const PORT = process.env.PORT || 3000;
const app = express();


app.use(bodyParser.json());
app.use(cors());

app.get('/',function(req,res){
    res.send({
        message:'Rota Padrão'
    })
});

/*
const myOAuth2Client = new OAuth2(
    "680829537103-822mkj8ogtt094q786bsdbfahcfbs6c5.apps.googleusercontent.com",
    "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",
    "https://developers.google.com/oauthplayground"
);

myOAuth2Client.setCredentials({
    refresh_token:"1//04osFiDgxzbTECgYIARAAGAQSNwF-L9IrOeZ3Mf_BMj1TCe0UADTzXZvRTkU70n_RO5NtGBRt9MggLzXMY8I7_vbopz44xwduSr0"
});

const myAccessToken = myOAuth2Client.getAccessToken()

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
         type: "OAuth2",
         user: "gasolinaacconts@gmail.com",
         clientId: "680829537103-822mkj8ogtt094q786bsdbfahcfbs6c5.apps.googleusercontent.com",
         clientSecret: "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",
         refreshToken: "1//04osFiDgxzbTECgYIARAAGAQSNwF-L9IrOeZ3Mf_BMj1TCe0UADTzXZvRTkU70n_RO5NtGBRt9MggLzXMY8I7_vbopz44xwduSr0",
         accessToken: myAccessToken
}});

app.post('/sendemail',function(req,res){
    const mailOptions = {
        from: 'gasolinaacconts@gmail.com',
        to: req.body.email, 
        subject: 'Sua conta do gasolina foi excluída', 
        html: '<p>'+ req.body.message +'</p>'
    }
    transport.sendMail(mailOptions,function(err,result){
        if(err){
            res.send({
                message:err
            })
        }else{
            transport.close();
            res.send({
                message:'Email has been sent: check your inbox!'
            })
        }
    })
})
*/

app.listen(PORT, function (req, res) {
    console.log(`Observando a porta ${PORT}`);
})