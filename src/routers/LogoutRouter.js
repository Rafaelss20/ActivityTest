class Logout{
    constructor(){
    }
    sair(req,res){
        req.session.isLoggedIn = false
        req.session.save()
        res.redirect('/')
    }
}

module.exports = Logout