const { Op } = require("sequelize");
const trackOrders = require("../database/model/TrackeOrdes");

class TrackOrders {
    constructor() { }
    open(req, res) {
        res.render('trackorders', { msg: 'Para listar todos os pedidos, busque por nada' })
    }
    listarpedido(req, res) {
        const search = `${req.body.codRastreio}%`
        trackOrders.findAll({ where: { idPed: { [Op.like]: search } } })
            .then((result) => {
                if (result[0]!==undefined) {
                    return res.render('trackorders', { orders: result })
                } else {
                    return res.render('trackorders', { orders: [{ idPed: `Código ${search.split('%', 1)} não encontrado.` }] })
                }
            })
            .catch((erro) => {
                console.log('Error: ', erro);
            })
    }
}
module.exports = TrackOrders