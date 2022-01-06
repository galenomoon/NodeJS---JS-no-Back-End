//EXPORTA O MÓDULO
module.exports = (app) => {

    //GET | método da rota
    app.get('/', (req, res) => { //criando servidor
        //(req) REQUISIÇÃO | (res) RESPOSTA

        res.statusCode = 200; //sinal para o servidor informando sucesso na conexão
        res.setHeader('Content-Type', 'text/html'); //Esse troço "cria" um cabeçalho HTML pra interpretar a linha de baixo
        res.end('<h1>Houston? Can you hear me?</h1>'); //caraca menó, criei html com JS
    });
}