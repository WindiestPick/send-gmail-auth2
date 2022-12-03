# Envio de e-mail google (gmail) usando Auth2.0

> Criação de um sistema simples para envio de 
> e-mail usando o auth2.0 da Google.

## Passo a Passo:

1. ### Criar uma conta no Google Cloud Platform:

    > Primeiramente é necessario cirar uma conta no "Google Cloud Platform" e configura-la para ter acesso a verificação do google (o Auth2.0). 
    >> Link: https://cloud.google.com

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudLogin1.png"></img>

    > Após entrar com sua conta no "Google Cloud Platform" acesse o "Google Cloud Console" clicando em um dos botões mostrados na imagem a baixo:

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudConsole.png"></img>

2. ### Criar um novo projeto:
    
    > Pressione o botão "Select a project" em seguida pressione em novo projeto. Como mostra as imagens a baixo:

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudProject1.png"></img>

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudProject2.png"></img>

    > Dê um nome para o seu projeto e defina uma organização, caso não tenha uma, deixe o campo setado como "No organization", em seguida pressione o botão "CREATE".

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudProject3.png"></img>

3. ### Configurando o novo projeto:

    > Com o projeto selecionado leve o mouse até a aba "APIs & Services", em seguida, no sub menu, pressione "0Auth consent screen". Como demonstrado na imagem a baixo:

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudConfig1.png"></img>

    > Em seguida defina o "User Type" como "External", e confirme clicando em "CREATE".

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudConfig2.png"></img>

    > Ao concluir essa etapa abrirá uma nova janela para adicionar algumas configurações do app, é importante que você adicione um nome para o app, o "user suport e-mail", e o e-mail de contato do desenvolvedor (As demais configurações são opcionais), ao preenceher os campos clique em "SAVE AND CONTINUE"

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudConfig3.png"></img>

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudConfig4.png"></img>

    > Já nos scopos, não há necessidade de alteração, porém o a fase de "Test User" é uma das mais importantes, aqui você irá definir o e-mail que será responsável por ativar as APIs do google (o e-mail que você usará no código node para automatiza-lo).

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudConfig5.png"></img>

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudConfig6.png"></img>

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudConfig7.png"></img>

    > Após configurar o Consent Screen, procure pela aba "Credentials", onde criaremos a chave para verificação Auth2.0.
    
    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudConfig8.png"></img>
    
    > Na parte superior pressione "Create Credentials" e em seguida selecione "Create OAuth client ID".

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudConfig9.png"></img>

    > No tipo da aplicação selecione "Web application" escolha um nome pra chave (pode ser qualquer nome).

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudConfig10.png"></img>
    
    > Em seguida procure por "Authorized redirect URIs", adicione a URL a baixo no campo indicado:

        https://developers.google.com/oauthplayground

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudConfig11.png"></img>

    > Ao completar o procedimento aparecerá uma janela com as suas credenciais o "Client ID" e o "Client Secret ID" copie, e salve-as em um bloco de notas ou arquivo que vc possa consultar.

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudConfig12.png"></img>

4. ### Hablilitando as APIs:

    > Terminando a etapa a cima, você ira acessar o site do google playground para hablilitar as APIs no e-mail desejado.
    >> Link:  https://developers.google.com/oauthplayground

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleDevelopers1.png"></img>

    > Primeiramente é necessário fazer algumas configuirações, no canto superior direito, procure por uma engrenágem, essa é a janela de configurações, em seguida marque a opção "Use your own OAuth credentials" e adicione as suas credenciais que foram geradas na etapa passada.

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleDevelopers2.png"></img>

    > Em seguida preencha o campo "Input your won scopes" com o a URL do e-mail google e clique em "Authorize APIs".
                
        https://mail.google.com/

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleDevelopers3.png"></img>

    > Você será redirecionada para uma pagina de login padrão do google (Apenas o e-mail que foi adicionado como usuário de teste terá permissão para efetuar o login). Ao efetuar o login algumas confirmações são necessárias. Como mostra as imagens a baixo: 

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleDevelopers4.png"></img>

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleDevelopers5.png"></img>

    > Ao retornar para o site, você receberá um código de autorização, precione o botão "Exchenge authorization code for tokens" ele irá gerar dois tokens, guarde o "Refresh token" que será usado no código node.

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleDevelopers6.png"></img>

5. ### Detalhamento do Código:
    
    > O código em sí é bem simples, primeiramente adicione todas as dependencias do projeto.

Dependencias:

        npm install express
>
        npm install body-parser
>
        npm install nodemailer
>
        npm install googleapis
>
        npm install cors

Ou o comando completo:

        npm install express body-parser nodemailer googleapis cors


Instale tambêm as ferramentas de execução.

>
        npm install -g http-server
>
        npm install -g nodemon


Codigo JS:

>Importe elas para dentro de um arquivo js (por padrão utilize o nome do arquivo como Controller.js):

        const express = require('express');
        const bodyParser = require('body-parser');
        const nodemailer = require('nodemailer');
        const { google } = require("googleapis");
        const cors = require('cors');
        const OAuth2 = google.auth.OAuth2;

> Crie duas constantes uma para definir a porta utilizada para requisições e a outra para o express.

        const PORT = process.env.PORT || 3000;
        const app = express();

> Já com o app criado você vai ativar a função "cors" e "bodyParser" (o cors é para paginas web, não é necessário para aplicativos android ou desktop).

        app.use(bodyParser.json());
        app.use(cors());


> Em seguida vamos criar uma rota padrão só para testar o funcionamento da aplicação.

        app.get('/',function(req,res){
                res.send({
                        message:'Rota Padrão'
                })
        });

> E para ativar de fato a aplicação criaremos um "listen" que será responsável por receber as requisições feitas a página.

        app.listen(PORT, function (req, res) {
                console.log(`Observando a porta ${PORT}`);
        })

> Com isso já podemos testar se está tudo certo com o nosso controller, digite o comando a baxo em um "prompt" que esteja no diretório do projeto.
        
        nodemon controller.js

<img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/CodeTesting1.png"></img>

> Com o nodemon funcionando podemos começar a configurar as verificações de Auth2, primeiro crie o cliente Auth, criando um objeto OAuth2.

        const auth2Client = new OAuth2(
                "Adicione o seu Client ID",
                "Adicione o seu Client Secret",
                "https://developers.google.com/oauthplayground"
        );

> Em seguida definiremos um validador com as credenciais que foram geradas no Google Playground.

        Auth2Client.setCredentials({
                refresh_token:"Seu Refresh Token"
        });

> E então criamos uma variável para receber o token de acesso do Google Playground.

        const accessToken = auth2Client.getAccessToken()

> Com o Aceess Token em mãos podemos prosseguir pra proxima etapa, definir quem vai transportar o nosso e-mail, no caso o Google.

        const transport = nodemailer.createTransport({
                service: "gmail",
                auth: {
                        type: "OAuth2",
                        user: "e-mail cadastrado no google playground",
                        clientId: "Seu Client ID",
                        clientSecret: "Seu Client Secret",
                        refreshToken: "Seu Refrash Token",
                        accessToken: accessToken
                }
        });

> Execultando todas as etapas até aqui, finalmente podemos criar a pagina de requisição para em fim enviar os e-mails, atravez de um app.post() crie euma função pra enviar as mensagens.

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
        })

> Agora podemos execultar o nodemon para habilitar a página de requisisção e, para enviar um e-mail de fato iremos fazer um fetch passando os parâmetros para a página. Pra isso criei um código simples html apenas como exemplo.

        <!DOCTYPE html>
        <html>
        <header>
        <title>google img</title>
        <script src="./Index.js"></script>
        </header>

        <body>
        <label for="">Email:</label>
        <input type="text" id="email" /><br>
        <label for="">Msg a ser enviada:</label>
        <input type="text" id="message" />
        <input type="button" value="Enviar" id="button" />
        </body>

        </html>

> Nesse código você adiciona pra quem será enviado e a mensagem que será enviada.

        window.onload = function() {

                let button = document.getElementById("button").onclick = async function() {
                        let email = document.getElementById("email").value;
                        let message = document.getElementById("message").value;

                        let send = fetch("http://IpLocal:3000/sendemail", {
                                method: 'POST',
                                headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                        emailUser: email,
                                        messageUser: message
                                })
                        })
                        let ress = await send.json();
                        console.log(ress);
                }
        }

> No JavaScript fazemos um fetch direcionando os parâmetros a pagina node onde será enviado o e-mail, lembrando que todos os parâmetros do e-mail podem ser alterados, no exemplo é alterado apenas o e-mail e a menssagem, mas você pode fazer algo mais complexo passando mais parâmetros.

Por fim execulte o nodemon e crie um servidor local para efetuar o teste, pra isso usaremos o http-server. No diretório do projeto digite o comando:

        http-server --cors

abra a pagína web qeu foi gerada pelo http-server.

<img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/CodeTesting2.png"></img>

<img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/CodeTesting3.png"></img>
