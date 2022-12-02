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

const myOAuth2Client = new OAuth2(
    "Adicione o seu Client ID",
    "Adicione o seu Client Secret",
    "https://developers.google.com/oauthplayground"
);

myOAuth2Client.setCredentials({
    refresh_token:"Seu Refresh Token"
});

const myAccessToken = myOAuth2Client.getAccessToken()


const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
            type: "OAuth2",
            user: "e-mail cadastrado no google playground",
            clientId: "Seu Client ID",
            clientSecret: "Seu Client Secret",
            refreshToken: "Seu Refrash Token",
            accessToken: myAccessToken
    }
});


app.post('/sendemail',function(req,res){
    const mailOptions = {
        from: 'e-mail cadastrado no google playground',
        to: req.body.email,
        subject: 'Titulo',
        html: '<p> Mensagens </p>'
    }
    transport.sendMail(mailOptions,function(err,result){
        if(err){
            res.send({
                message:err
            })
        }else{
            transport.close();
            res.send({
                message:'E-mail enviado olhe sua caixa de entrada'
            })
        }
    })
});

app.listen(PORT, function (req, res) {
    console.log(`Observando a porta ${PORT}`);
});