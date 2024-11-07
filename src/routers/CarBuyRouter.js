const bag = require("../database/model/CarBuy");
const products = require("../database/model/Product");
const { verifiqueProduto } = require("../utils/CarBuyFunctions");
const ProductClass = require("../utils/model/ProductClass");

class CarBuy {
    constructor() {
    }
    open(req, res) {
        bag.findAll().then((result)=>{
            if (result[0]!==undefined) {
                return res.render('carbuy', { itens: result , userAcess: req.session.name})
            } else {
                return res.render('carbuy', { msg: 'Nenhum item adicionado', userAcess: req.session.name})
            }
        })
    }

    async addItem(req, res) {
        // console.log(req.params.id);
        let arrayProduct = new ProductClass()
        await products.findOne({ where: { id: req.params.id } }).then((result) => {
            console.log(result);
            arrayProduct.idProduto = result.idProduct
            arrayProduct.description = result.description
            arrayProduct.img = result.img
            arrayProduct.name = result.nameProduct
            arrayProduct.value = result.value
        }).catch((erro) => {
            console.error('Error: ', erro)
        })
        const quantidade = req.body.quantidade || 1
        let existente = await verifiqueProduto(arrayProduct.idProduto)
        console.log(existente);
        
        if (existente) {
            await bag.findOne({ where: { idProduct: arrayProduct.idProduto } }).then((post) => {
                let temp = post.quantidade + quantidade
                let subtotal = temp * post.product.value
                console.log('Quantidade: ',quantidade);
                console.log('Total: ',subtotal);
                post.quantidade = temp
                post.subTota = subtotal
                post.save()
            })
        } else {
            let subtotal = quantidade * arrayProduct.value
            bag.create({ idProduct: arrayProduct.idProduto, quantidade: quantidade, product: arrayProduct, subTota: subtotal })
        }
        return res.render('sucessfull', { msg: `Adicionado ${quantidade} x ${arrayProduct.name} com sucesso` , carBuy: true})
    }
}
module.exports = CarBuy