// ===============SERVIDOR COM NODEJS ================== //

const express = require('express'); //carregando módulo do servidor
const consign = require('consign'); //carregando o consign
const bodyParser = require('body-parser'); //carregando o bodyparser
const expressValidator = require('express-validator'); // carregando o Express Validator

let app = express(); //Invocando o EXPRESS

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(expressValidator());

consign().include('routes').include('utils').into(app);
//Consign, inclua tudo em minha pasta ROUTES na variável APP pfvr rs

app.listen(3000, '127.0.0.1', () => { //ouça na porta 3000 no ip 127.0.0.1

    //Mensagem fofa  dizendo que o bagui ta rodando :D
    console.log('|===========================|')
    console.log('|===| Servidor Rodando! |===|')
    console.log('|===========================|')

})

// ===================== ANOTAÇÕES DAS AULAS DO PROJETO ========================
// NPM | GERENCIADOR DE PACOTES DO NODEJS | [npm install ]
// JSON | É UMA LISTA DE DESCRIÇÕES, FÁBRICA DE CARTEIRINHAS, UMA VARIÁVEL QUE GUARDA UMA LISTA DE INFORMAÇÕES | Exemplo, meu RG é um JSON pois tem meu Nome: galeno | Data de Nasc: 29/08 | RG:....
// PACKAGE.JSON | O arquivo package. json é o ponto de partida de qualquer projeto NodeJS. Ele é responsável por descrever o seu projeto, informar as engines (versão do node e do npm), url do repositório, versão do projeto, dependências de produção e de desenvolvimento dentre outras coisas.
// EXPRESS | [npm install express --save]
// NODEMON | Atualiza o servidor automáticamente sem reiniciali manualmente conforme o projeto JS é atualizado | [npm install nodemon -g] (-g for global)
// CONSIGN
// NEDB | BANCO de DADOS do JS
// let routesIndex = require('./routes/index'); //Puxando o MÓDULO do INDEX do ROUTES
// let routesUsers = require('./routes/users'); //Puxando o MÓDULO do USERS do ROUTES

// //DIZENDO PARA O EXPRESS QUE ESTOU UTILIZANDO AQUELAS ROTAS => ()
// app.use(routesIndex);
// app.use('/users', routesUsers);)