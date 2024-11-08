const users = require("../database/model/Users");
const { createBag } = require("../utils/CarBuyFunctions");
const { verificarEmailExiste } = require("../utils/CreateUserFunctions");

class Authentication {
    constructor() {
    }
    findOne(req, res) {
        users.findOne({ where: { email: req.body.email, password: req.body.password } }).then((result) => {
            console.log(result);
            if (result && result.email) {
                req.session.email = result.email
                req.session.limit = result.balance
                req.session.name = result.firstName
                req.session.isLoggedIn = true;
                req.session.save()
                createBag()
                res.redirect('/home')
            } else {
                return verificarEmailExiste(req.body.email)? res.render('login', { msg: '• E-mail/Senha incorretos!' }) : res.render('login', { msg: 'Não há cadastro' })
            }
        })
    }
}
module.exports = Authentication