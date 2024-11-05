const Functions = require("../utils/CreateUserFunctions");
const ModelCreateUser = require("./model/ResModelCreateUser");
const monthyUser = require('./model/MonthyUser')
// const db: any = connectDataBase()
class CreateUser {
    // private database: any
    constructor() {
    }
    save(req, res) {
        const { firstName, lastName, email, password, cpf, nascimento, confirmPassword, numberCard, cvv, dateValed } = req.body;
        let isPassword = true;
        let result = new ModelCreateUser(firstName, lastName, email, password, cpf, nascimento, confirmPassword, numberCard, cvv, dateValed);
        if (!Functions.hasNumber(password)) {
            result.number = '• Não contem número!';
            isPassword = false;
        }
        if (!Functions.hasLowerCase(password)) {
            result.LowerCase = '• Não contem letra minuscula!';
            isPassword = false;
        }
        if (!Functions.hasUpperCase(password)) {
            result.UpperCase = '• Não contem letra maíscula!';
            isPassword = false;
        }
        if (!Functions.hasEightChar(password)) {
            result.EightChar = '• Não contem 8 caractéres!';
            isPassword = false;
        }
        if (!Functions.veriftPassword(password, confirmPassword)) {
            result.verify = '• Senha não são identicas!';
            isPassword = false;
        }
        if (!Functions.validateEmail(email)) {
            result.verify = '• Senha não são identicas!';
            isPassword = false;
        }
        if (isPassword) {
            const user = new monthyUser(firstName, lastName, email, password, cpf, nascimento, numberCard, cvv, dateValed);
            user.create()
            return res.render("signup", { msg: 'Cadastrado com sucesso' });
        }
        else {
            return res.render('signup', { result: result });
        }
    }
}
module.exports = CreateUser