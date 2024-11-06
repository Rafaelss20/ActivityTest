const db = require("../db");


const bag = db.sequelize.define('bag',{
    idProduct: {
        type: db.Sequelize.JSON
    },
    quantidade:{
        type: db.Sequelize.INTEGER
    },
    subTota:{
        type: db.Sequelize.FLOAT
    }
})

bag.sync({force: true})

module.exports = bag
