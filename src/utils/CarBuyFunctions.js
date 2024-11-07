const bag = require("../database/model/CarBuy")

async function verifiqueProduto(params) {
    try {
        const bags = await bag.findOne({ where: { idProduct: params } })
        console.log(bags !== null);
        
        return Boolean(bags !== null); // Retorna true se o e-mail existir, false caso contrário
    } catch (error) {
        console.error("Erro ao verificar e-mail:", error);
        throw error; // Relança o erro para tratamento adicional
    }
}
module.exports = verifiqueProduto