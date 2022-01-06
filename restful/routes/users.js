let NeDB = require('nedb'); //Solicitando NeDB
let db = new NeDB({ //CRIAÇÃO DO BANCO
    filename: 'users.db', //Arquivo criado em Disco
    autoload: true //Carregue-o imediatamente
})

//Exporte para o INDEX a FUNCTION app
module.exports = app => {

    let route = app.route('/users');

    // =======GET======= CONSULTAR UM JSON ESPECIFICO =======GET=======

    //GET
    route.get((req, res) => {

        db.find({}).sort({ name: 1 }).exec((err, users) => {
            //Encontre [db.find({})] por {JSON VAZIO = sem predefinição específica} e os ordene em ordem [.sort({name = 1})] crescente e...
            //[(.exec((err, users))] Execute e tenha os parâmetros caso falhe, e caso dê td certo :D

            if (err) { //em caso de falha:

                app.utils.error.send(err, req, res);

            } else {

                res.status(200).json(users);
                res.setHeader('Content-Type', 'application/json'); //prepara a inter pretação para receber um JSON
                res.json({
                    users
                });
            }
        })
    });

    // =======POST======= CADASTRAR UM JSON ESPECIFICO =======POST=======

    //POST
    route.post((req, res) => {
        //(err, user) => [Objeto que quero salvar], [funciton](no caso de uma falha)


        //====== VALIDANDO DADOS =======
        if (!app.utils.validator.user(app, req, res)) return false;
        //===============================

        db.insert(req.body, (err, user) => { //insira um JSON
            //armazene no banco um JSON

            if (err) { //em caso de falha:

                app.utils.error.send(err, req, res);

            } else {

                res.status(200).json(user);
            }
        })
    });

    // =======FIND_ONE======= CONSULTAR UM JSON ESPECIFICO =======FIND_ONE=======

    let routeId = app.route('/users/:id')

    routeId.get((req, res) => {
        //FINDONE
        db.findOne({ _id: req.params.id }).exec((err, user) => {

            if (err) { //em caso de falha:

                app.utils.error.send(err, req, res);

            } else {

                res.status(200).json(user);
            }
        })
    })

    // =======PUT======= EDITAR UM JSON ESPECIFICO =======PUT=======

    //PUT
    routeId.put((req, res) => {
            if (!app.utils.validator.user(app, req, res)) return false;
            //UPDATE
            db.update({ _id: req.params.id }, req.body, err => {

                if (err) { //em caso de falha:

                    app.utils.error.send(err, req, res);

                } else {
                    //juntar as informações do parâmetro com as do body e apresenta-las
                    res.status(200).json(Object.assign(req.params, req.body));
                }
            })
        })
        // =======DELETE======= EXCLUIR UM JSON ESPECIFICO =======REMOVE=======

    routeId.delete((req, res) => {

        db.remove({ _id: req.params.id }, {}, err => {

            if (err) { //em caso de falha:

                app.utils.error.send(err, req, res);

            } else {
                //juntar as informações do parâmetro com as do body e apresenta-las
                res.status(200).json(req.params);
            }
        })

    })

}