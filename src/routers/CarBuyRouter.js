const { where } = require("sequelize");
const database = require("../database/localstorage");
const bag = require("../database/model/CarBuy");
const itemBag = require("../database/model/CarBuy");
const products = require("../database/model/Product");
const verifiqueProduto = require("../utils/CarBuyFunctions");

class CarBuy{
    constructor(){   
    }
    open(req,res){
        const produtosAdicionados = []
        for (let index = 0; index < localStorage.length; index++) {
            let temp = localStorage.getItem(index)
            temp = this.gerarItem(temp.id)
            produtosAdicionados.push(temp)
        }
        return res.render('carbuy',localStorage)
    }
    gerarItem(produto){    
        return products.findOne({where: {id: produto}})
    }
    addItem(req,res){
        console.log(req.params.id);
        
        const info = this.gerarItem(req.params.id)
        console.log('Busca sucessfull');
        const quantidade = req.body.quantidade || 1
        let existente = verifiqueProduto(info)
        if(existente.value){
            bag.findOne({where: {id: existente.id }}).then((post)=>{
                post.quantidade = post.quantidade + quantidade
            })
        }else{
            bag.create({idProduct: info,quantidade: quantidade})
        }
        bag.findOne({where: {id: existente.id }}).then((post)=>{
          quantidade = post.quantidade
        })
        
        console.log('sucess');
        return res.render('Sucefull', {msg: `Adicionado ${quantidade} x ${info.name} com sucesso`})
    }
}
module.exports = CarBuy