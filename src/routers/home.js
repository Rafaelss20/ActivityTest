const products = require('../database/model/Product')

class Produtos {
    constructor() {
    }
    findAll(req,res){
        products.findAll().then((post)=>{
            res.render('home',{post: post})
        }).catch((error)=>{
            res.render('home',{post: error})
        })
    }
    find(req, res) {
        const { Op } = require('sequelize');              // biblioteca de operadores
        const query = `%${req.body.searchProduct}%`;// string de consulta
        products.findAll({ where: { nameProduct: { [Op.like]: query } } })
            .then((post) => {
                res.render('home', { post: post })
            }).catch((error) => {
                res.render('home', { post: error })
            })
    }
}
module.exports = Produtos
