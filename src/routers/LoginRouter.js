const users = require("../database/model/Users");

class Authentication {
    constructor() {
    }
    findOne(req, res) {
        users.findOne({ where: { email: req.body.email, password: req.body.password } }).then((result) => {
            console.log(result);
            if (result && result.email) {
                req.session.email = result.email
                req.session.isLoggedIn = true;
                req.session.save()
                res.redirect('/home')
            } else {
                res.render('login', {msg: '• E-mail/Senha incorretos!'})
            }
        })
    }
}
module.exports = Authentication