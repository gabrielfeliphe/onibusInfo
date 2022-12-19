# onibusInfo


Este é um aplicativo que faz várias requisições para uma API de rastreamento de ônibus em tempo real. Quando o ônibus estiver pronto para sair do terminal, um e-mail é enviado usando o TakeoutClient.

Este aplicativo é hospedado no Cyclic e foi desenvolvido em Node.js.

#Pré-requisitos
Para executar este aplicativo, você precisará:

Node.js e npm instalados em sua máquina
Uma conta no TakeoutClient para enviar e-mails
Instalação
Para instalar este aplicativo, siga os seguintes passos:

Clone este repositório para sua máquina
Instale as dependências: npm install

#Configuração
Antes de executar o aplicativo, você precisará configurar algumas coisas:

Crie uma conta no TakeoutClient e gere um token de acesso.
Adicione o endereço de e-mail para o qual deseja receber notificações no arquivo .env.
Substitua a string TAKEOUT_TOKEN no arquivo .env pelo seu token de acesso do TakeoutClient.
Substitua a string URL no arquivo .env pela URL da API de rastreamento de ônibus.
Substitua a string HEADER no arquivo .env pelo cabeçalho de referência que você deseja enviar com as requisições para a API de rastreamento de ônibus.

#Execução Local

Para executar o aplicativo, basta seguir os seguintes passos:

Inicie o aplicativo: npm start
Acesse http://localhost:3000 no seu navegador para ver o resultado da requisição para a API de rastreamento de ônibus.
Observação: este aplicativo faz uma nova requisição para a API de rastreamento de ônibus a cada 3 segundos. Se o ônibus estiver pronto para sair do terminal, um e-mail será enviado para o endereço de e-mail especificado usando o TakeoutClient.

#Execução no Cyclic

Faça o setup da aplicação no Cyclic.sh, depois faça a execução dele via schedule
