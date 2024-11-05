
const users = require('../database/model/Users');
//Senha
//Verificar se a senha é identica a confirmação de senha
function veriftPassword(password, passwordConfirmation) {
    return password === passwordConfirmation;
}
//Verificar se a senha contém número
function hasNumber(password) {
    return /\d/.test(password);
}
//Verificar se a senha contém letra maiúscula
function hasUpperCase(password) {
    return /[A-Z]/.test(password);
}
//Verificar se a senha contém letra minuscula
function hasLowerCase(password) {
    return /[a-z]/.test(password);
}
//Verificar se a senha contém nó mínimo 8 caracter.
function hasEightChar(password) {
    return password.length >= 8;
}
async function verificarEmailExiste(email) {
    try {
        const user = await users.findOne({ where: { email: email } });
        return user !== null; // Retorna true se o e-mail existir, false caso contrário
    } catch (error) {
        console.error("Erro ao verificar e-mail:", error);
        throw error; // Relança o erro para tratamento adicional
    }
}
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
module.exports = { veriftPassword, hasEightChar, hasLowerCase, hasNumber, validateEmail, hasUpperCase, verificarEmailExiste }