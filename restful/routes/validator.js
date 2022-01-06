module.exports = {

    user: (app, req, res) => {

        //Valide 'name' e caso não esteja válido: err
        req.assert('name', 'O nome é obrigatório').notEmpty();
        req.assert('email', 'O e-mail está inválido').notEmpty().isEmail();

        let errors = req.validationErrors();

        if (errors) {
            app.utils.error.send(err, req, res);
            return false;
        } else {

            return true
        }
    }

};