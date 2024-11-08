const users = require("../database/model/Users");
const monthyUser = require("./model/MonthyUser");

users.findOne()
async function takeCard(email) {
    const usuario = new monthyUser()
    await users.findOne({ where: { email: email } }).then((result) => {
        usuario.balance = result.balance
        usuario.ccv = result.ccv
        usuario.dateValid = result.dateValid
        usuario.numberCard = result.numberCard
        usuario.cpf = result.cpf
        console.log('susses');

        console.log(usuario);

    }).catch((erro) => {
        console.error('Error: ', erro);
        return undefined

    })
    return usuario;

}
async function hasBalance(buyTotal, balance) {
    console.log(Boolean(Number(buyTotal) > Number(balance)));
    return Boolean(Number(buyTotal) > Number(balance))
}
async function isDateValid(cardDate) {
    let dateCard = String(cardDate).split('/', 2)
    dateCard[1] = '20' + dateCard[1]
    console.log(dateCard[0], dateCard[1]);
    let date = new Date()
    let month = date.getMonth()
    let year = date.getFullYear()

    if (year > dateCard[1]) {
        return true
    }
    if (month >= dateCard[0]) {
        return true
    }
    return false

}
async function lastNumberCard(numberRegistered, numberProvid) {
    let resgistrado = String(numberRegistered).slice(15)
    console.log('Number card: ', resgistrado);
    console.log('Result number card: ', Boolean(resgistrado === String(numberProvid)));
    return Boolean(resgistrado !== String(numberProvid))
}
async function confirmCVV(cvvRegistered, cvvProvided) {
    console.log('Result cvv: ', Boolean(cvvProvided === cvvRegistered));
    return Boolean(String(cvvProvided) !== String(cvvRegistered))
}
async function confirmCPF(cpfRegistered, cpfProvided) {
    console.log('Result cpf: ', Boolean(cpfRegistered === cpfProvided));
    return Boolean(String(cpfProvided) !== String(cpfRegistered))
}

module.exports = { hasBalance, isDateValid, lastNumberCard, confirmCVV, takeCard, confirmCPF }