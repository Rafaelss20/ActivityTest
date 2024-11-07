const db = require("../database/db");
const bag = require("../database/model/CarBuy");

async function verifiqueProduto(params) {
    try {
        const bags = await bag.findOne({ where: { idProduct: params } })
        return Boolean(bags !== null); // Retorna true se o e-mail existir, false caso contrário
    } catch (error) {
        console.error("Erro ao buscar item:", error);
        throw error; // Relança o erro para tratamento adicional
    }
}

async function cleanBag() {
    await db.sequelize.query('DELETE FROM bags').then(() => {
        return console.log('Bag limpa')
    }).catch((Error) => {
        return console.log(`Error: ${Error}`)
    })
}
module.exports = {verifiqueProduto, cleanBag}