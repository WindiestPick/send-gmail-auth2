# Envio de e-mail google (gmail) usando Auth2.0

> Criação de um sistema simples para envio de 
> e-mail usando o auth2.0 da google.

## Dependencias:

Use os comandos:

        npm install express
>
        npm install body-parser
>
        npm install nodemailer
>
        npm install googleapis
>
        npm install cors
>
        npm install http-server

Ou o comando completo:

        npm install express body-parser nodemailer googleapis cors http-server

## Passo a Passo:

1. ### Criar uma conta no Google Cloud Platform:

    >Primeiramente é necessario cirar uma conta no "Google Cloud Platform" e configura-la para ter acesso a verificação do google (o Auth2.0). Link: https://cloud.google.com

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudLogin1.png"></img>

    >Após entrar com sua conta no "Google Cloud Platform" acesse o "Google Cloud Console" clicando em um dos botões mostrados na imagem a baixo:

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudConsole.png"></img>

2. ### Criar um novo projeto:
    
    >Precione o botão "Select a project" em seguida precione em novo projeto. Como mostra as imagens a baixo:

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudProject1.png"></img>

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudProject2.png"></img>

    >Dê um nome para o seu projeto e defina uma organização, caso não tenha uma, deixe o campo setado como "No organization", em seguida precione o botão "CREATE".

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudProject3.png"></img>

3. ### Configurando o novo projeto:

    > Com o projeto selecionado leve o mouse até a aba "APIs & Services", em seguida, no sub menu, precione "0Auth consent screen". Como demonstrado na imagem a baixo:

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudConfig1.png"></img>

    > Em seguida defina o "User Type" como "External", e confirme clicando em "CREATE".

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudConfig2.png"></img>


