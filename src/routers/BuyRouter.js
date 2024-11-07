const { cleanBag } = require("../utils/CarBuyFunctions");

class buyBag{
    constructor(){

    }
    async checkout(req,res){
        let teste = await req.session.email
        console.log(teste);
        cleanBag()
        res.render('sucessfull', {msg: `Compra realizado com sucesso.`})        
    }
}

module.exports =  buyBag