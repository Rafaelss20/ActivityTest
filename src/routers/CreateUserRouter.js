const Functions = require("../utils/CreateUserFunctions");
const resCreateUser = require("../utils/model/ResModelCreateUser");
const monthyUser = require('../utils/model/MonthyUser');

class CreateUser {
    // private database: any
    constructor() {
    }
    async save(req, res) {
        const { firstName, lastName, email, password, cpf, nascimento, confirmPassword, numberCard, cvv, dateValed } = req.body;
        let isPassword = true;
        let result = new resCreateUser(firstName, lastName, email, password, cpf, nascimento, confirmPassword, numberCard, cvv, dateValed);
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
        await Functions.verificarEmailExiste(email).then((existe) => {
            if (existe) {
                console.log("E-mail já cadastrado!");
                result.mailmsg = '• E-mail já cadastrado!';
                isPassword = false
            } else {
                console.log("E-mail disponível para cadastro.");
            }
        })
            .catch((error) => {
                console.error("Erro ao verificar e-mail:", error);
            });
        if (!Functions.validateEmail(email)) {
            result.mailmsg = '• Email Invalido!';
            isPassword = false;
        }
        if (isPassword) {
            const user = await new monthyUser(firstName, lastName, email, password, cpf, nascimento, numberCard, cvv, dateValed);
            user.create()
            return res.render("sucessfull", { msg: 'Cadastrado com sucesso' , codCreate: true});
        }
        else {
            return res.render('createUser', { result: result });
        }
    }
}
module.exports = CreateUser