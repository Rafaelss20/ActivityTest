const db = require('../db');

const users = db.sequelize.define('users', {
    firstName: {
        type: db.Sequelize.STRING
    },
    lastName: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    nascimento: {
        type: db.Sequelize.STRING
    },
    password: {
        type: db.Sequelize.STRING
    },
    userActivity: {
        type: db.Sequelize.BOOLEAN
    },
    userBlock: {
        type: db.Sequelize.BOOLEAN
    },
    tryPassword: {
        type: db.Sequelize.INTEGER
    },
    numberCard: {
        type: db.Sequelize.STRING
    },
    dateValid: {
        type: db.Sequelize.STRING
    },
    ccv: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.STRING
    },
    balance: {
        type: db.Sequelize.STRING
    }
});

// users.findAll().then(() => {
//         console.log('Tabela usuários existente');
        // users.sync({ force: true });
// }).catch(() => {
//     console.log('Tabela Users criada');
// })
module.exports = users;