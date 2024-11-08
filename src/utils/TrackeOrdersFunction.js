const trackOrders = require("../database/model/TrackeOrdes");

async function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
async function getIdProduct(id) {
    let arroz
    await trackOrders.findOne({ where: { id: id } }).then((result) => {
        arroz = result.idPed;
    }).catch((erro) => {
        console.error('Error: ', erro)
    })
    return arroz
}

module.exports = { getIdProduct, getRandomInt }