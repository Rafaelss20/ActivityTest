const db = require('./db');

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
        type: db.Sequelize.DATE
    },
    dateCreate: {
        type: db.Sequelize.DATE
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
    cpf: {
        type: db.Sequelize.STRING
    }
});

users.sync({ force: true });

module.exports = users;