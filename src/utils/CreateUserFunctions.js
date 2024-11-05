"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasEightChar = hasEightChar;
exports.hasLowerCase = hasLowerCase;
exports.hasNumber = hasNumber;
exports.hasUpperCase = hasUpperCase;
exports.veriftPassword = veriftPassword;
exports.validateEmail = validateEmail;
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
async function verificarEmailExiste(email){
    try {
        const user = await User.findOne({ email });
        return !!user; // Retorna true se o usuário foi encontrado, false caso contrário
    } catch (error) {
        console.error('Erro ao verificar email:', error);
        return false;
    }
}
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
module.exports = {veriftPassword, hasEightChar, hasLowerCase, hasNumber, validateEmail, hasUpperCase}