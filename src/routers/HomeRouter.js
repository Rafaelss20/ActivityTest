const products = require('../database/model/Product')
const { Op } = require('sequelize');  

class Produtos {
    constructor() {
    }
    findAll(req, res) {
        products.findAll().then((post) => {
            return res.render('home', { post: post, userAcess: req.session.name})
        }).catch((error) => {
            return res.render('home', { post: error, userAcess: req.session.name })
        })
    }
    find(req, res) {         // biblioteca de operadores
        const query = `%${req.body.searchProduct}%`;// string de consulta
        products.findAll({ where: { nameProduct: {[Op.like]: query }}})
            .then((post) => {
                return res.render('home', { post: post, userAcess: req.session.name})
            }).catch((error) => {
                return res.render('home', { post: error, userAcess: req.session.name })
            })
    }
}
module.exports = Produtos
