const Sequelize = require('sequelize');

require('dotenv').config()
const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASS, {
    host: "localhost",
    dialect: 'mysql',
    port: process.env.DB_PORT
});

sequelize.authenticate()
    .then(() => {
        console.log("Conectado")
    })
    .catch(() => {
        console.log("Não conectado")
    });

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}