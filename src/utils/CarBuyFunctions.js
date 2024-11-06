const bag = require("../database/model/CarBuy")

function verifiqueProduto(params){

    try {
        let dados
        const bags = bag.findOne({ where: { idProduct: params } }).then((result)=>{
            dados = result.id
        });
        let condition = Boolean(bags !== null)
        return {value: condition, id: dados}; // Retorna true se o e-mail existir, false caso contrário
    } catch (error) {
        console.error("Erro ao verificar e-mail:", error);
        throw error; // Relança o erro para tratamento adicional
    }
}

module.exports = verifiqueProduto