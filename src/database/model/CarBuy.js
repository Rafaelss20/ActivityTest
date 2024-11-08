const db = require("../db");


const bag = db.sequelize.define('bags',{
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

module.exports = bag
