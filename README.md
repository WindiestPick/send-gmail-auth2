# Envio de e-mail google (gmail) usando Auth2.0

> Criação de um sistema simples para envio de 
> e-mail usando o auth2.0 da Google.

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

    >Primeiramente é necessario cirar uma conta no "Google Cloud Platform" e configura-la para ter acesso a verificação do google (o Auth2.0). 
    >> Link: https://cloud.google.com

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleCloudLogin1.png"></img>

    >Após entrar com sua conta no "Google Cloud Platform" acesse o "Google Cloud Console" clicando em um dos botões mostrados na imagem a baixo:

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

    > Ao concluir essa etapa abrirá uma nova janela para adicionar algumas configurações do app, é importante que você adicione um nome para o app, o "user suport e-mail", e o e-mail de contato do desenvolvedor (As demais configurações são opcionais), ao preenceher os campos clik em "SAVE AND CONTINUE"

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

    > Em seguida preencha o campo "Input your won scopes" com o a URL do e-mail google e clik em "Authorize APIs".
                
        https://mail.google.com/

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleDevelopers3.png"></img>

    > Você será redirecionada para uma pagina de login padrão do google (Apenas o e-mail que foi adicionado como usuário de teste terá permissão para efetuar o login). Ao efetuar o login algumas confirmações são necessárias. Como mostra as imagens a baixo: 

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleDevelopers4.png"></img>

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleDevelopers5.png"></img>

    > Ao retornar para o site, você receberá um código de autorização, precione o botão "Exchenge authorization code for tokens" ele irá gerar dois tokens, guarde o "Refresh token" que será usado no código node.

    <img src="https://github.com/WindiestPick/send-gmail-auth2/blob/master/assets/img/GoogleDevelopers6.png"></img>