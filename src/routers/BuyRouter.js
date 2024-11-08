const trackOrders = require("../database/model/TrackeOrdes");
const Functions = require("../utils/BuyFunctions");
const { cleanBag } = require("../utils/CarBuyFunctions");
const { getRandomInt, getIdProduct } = require("../utils/TrackeOrdersFunction");

class buyBag {
    constructor() {
    }
    async checkout(req, res) {
        return res.render('Buy', { total: req.session.totalBuy, user: req.session.firstName })
    }
    async finishBuy(req, res) {
        const card = Functions.takeCard(req.session.email)

        if(await Functions.lastNumberCard((await card).numberCard, req.body.cardNumberEnd)){
            return res.render('sucessfull', { msg: 'Dígitos incorretos!',erroBuy:true })
        }
        
        if (await Functions.confirmCVV((await card).ccv, req.body.cvvCard)) {
            return res.render('sucessfull', { msg: 'Cvv incorreto!',erroBuy:true })
        }
        if (await Functions.confirmCPF((await card).cpf, req.body.cpf)) {
            return res.render('sucessfull', { msg: 'CPF incorreto!',erroBuy:true })
        }
        if (await Functions.isDateValid((await card).dateValid)) {
            return res.render('sucessfull', { msg: 'Validade expirada',erroBuy:true })
        }
        if (await Functions.hasBalance(req.session.totalBuy, (await card).balance)) {
            return res.render('sucessfull', { msg: 'Saldo insuficiente',erroBuy:true })
        }
        cleanBag()
        let codRastreio = await getRandomInt(1,10)
        codRastreio = await getIdProduct(codRastreio)
        console.log(codRastreio);
        
        return res.render('sucessfull', { msg: 'Compra realizada com sucesso', confirmBuy: true, idCodRastreio: codRastreio})
    }

}

module.exports = buyBag