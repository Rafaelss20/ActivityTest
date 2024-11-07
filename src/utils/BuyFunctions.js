const users = require("../database/model/Users");
const monthyUser = require("./model/MonthyUser");

users.findOne()

const usuario = new monthyUser(result)
users.findOne({where: {email: req.session.email}}).then((result)=>{
    usuario.balance = result.balance
})
async function hasBalance(req,res) {

}


module.exports = hasBalance