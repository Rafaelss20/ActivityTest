const { cleanBag } = require('../utils/CarBuyFunctions')

class Logout {
    constructor() {
    }
    async sair(req, res) {
        cleanBag()
        req.session.email = null
        req.session.limit = null
        req.session.name = null
        req.session.isLoggedIn = false
        req.session.save()
        res.redirect('/')
    }
}

module.exports = Logout