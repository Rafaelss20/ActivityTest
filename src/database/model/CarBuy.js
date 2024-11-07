const db = require("../db");
const products = require("./Product");


const bag = db.sequelize.define('bag',{
    idProduct: {
        type: db.Sequelize.STRING
    },
    quantidade:{
        type: db.Sequelize.INTEGER
    },
    subTota:{
        type: db.Sequelize.FLOAT
    },
    product: {
        type: db.Sequelize.JSON
    }
})

bag.sync({force: true})

module.exports = bag
