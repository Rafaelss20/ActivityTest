const db = require("../db");



const trackOrders = db.sequelize.define('tracksOders', {
    idPed: {
        type: db.Sequelize.STRING
    },
    separacao: {
        type: db.Sequelize.JSON
    },
    preaparaco: {
        type: db.Sequelize.JSON
    },
    embarcado: {
        type: db.Sequelize.JSON
    },
    saiuDestino: {
        type: db.Sequelize.JSON
    },
    emtransito: {
        type: db.Sequelize.JSON
    },
    nadistribuidora: {
        type: db.Sequelize.JSON
    },
    acaminho: {
        type: db.Sequelize.JSON
    },
    entregue: {
        type: db.Sequelize.JSON
    }
});

trackOrders.sync({ force: true });
setTimeout(() => {
trackOrders.create({ idPed: "NCAXOPERQ",separacao: { "name": 'Pedido em separação', "data": '03/11/2024 23:15' }, preaparaco: { "name": 'Pedido em preparação', "data": '04/11/2024 04:37' }, embarcado: { "name": 'Pedido embarcado na transportadora', "data": '04/11/2024 07:15' }, saiuDestino: { "name": 'Saiu do destino', "data": '04/11/2024 11:27' }})
trackOrders.create({ idPed: "PLWNMPAWE",separacao: { "name": 'Pedido em separação', "data": '03/11/2024 23:15' }, preaparaco: { "name": 'Pedido em preparação', "data": '04/11/2024 04:37' }, embarcado: { "name": 'Pedido embarcado na transportadora', "data": '04/11/2024 07:15' }, saiuDestino: { "name": 'Saiu do destino', "data": '04/11/2024 11:27' }})
trackOrders.create({ idPed: "HJFSNTOPM",separacao: { "name": 'Pedido em separação', "data": '03/11/2024 23:15' }, preaparaco: { "name": 'Pedido em preparação', "data": '04/11/2024 04:37' }, embarcado: { "name": 'Pedido embarcado na transportadora', "data": '04/11/2024 07:15' }, saiuDestino: { "name": 'Saiu do destino', "data": '04/11/2024 11:27' }})
trackOrders.create({ idPed: "BFHDRIOPT",separacao: { "name": 'Pedido em separação', "data": '03/11/2024 23:15' }, preaparaco: { "name": 'Pedido em preparação', "data": '04/11/2024 04:37' }, embarcado: { "name": 'Pedido embarcado na transportadora', "data": '04/11/2024 07:15' }, saiuDestino: { "name": 'Saiu do destino', "data": '04/11/2024 11:27' }})
trackOrders.create({ idPed: "PAQEJLCMF",separacao: { "name": 'Pedido em separação', "data": '03/11/2024 23:15' }, preaparaco: { "name": 'Pedido em preparação', "data": '04/11/2024 04:37' }, embarcado: { "name": 'Pedido embarcado na transportadora', "data": '04/11/2024 07:15' }, saiuDestino: { "name": 'Saiu do destino', "data": '04/11/2024 11:27' }})
trackOrders.create({ idPed: "JDKTEIOVA",separacao: { "name": 'Pedido em separação', "data": '03/11/2024 23:15' }, preaparaco: { "name": 'Pedido em preparação', "data": '04/11/2024 04:37' }, embarcado: { "name": 'Pedido embarcado na transportadora', "data": '04/11/2024 07:15' }, saiuDestino: { "name": 'Saiu do destino', "data": '04/11/2024 11:27' }})
trackOrders.create({ idPed: "LDHYEOPMC",separacao: { "name": 'Pedido em separação', "data": '03/11/2024 23:15' }, preaparaco: { "name": 'Pedido em preparação', "data": '04/11/2024 04:37' }, embarcado: { "name": 'Pedido embarcado na transportadora', "data": '04/11/2024 07:15' }, saiuDestino: { "name": 'Saiu do destino', "data": '04/11/2024 11:27' }})
trackOrders.create({ idPed: "SDJRIPCGM",separacao: { "name": 'Pedido em separação', "data": '03/11/2024 23:15' }, preaparaco: { "name": 'Pedido em preparação', "data": '04/11/2024 04:37' }, embarcado: { "name": 'Pedido embarcado na transportadora', "data": '04/11/2024 07:15' }, saiuDestino: { "name": 'Saiu do destino', "data": '04/11/2024 11:27' }})
trackOrders.create({ idPed: "HSWOURBXH",separacao: { "name": 'Pedido em separação', "data": '03/11/2024 23:15' }, preaparaco: { "name": 'Pedido em preparação', "data": '04/11/2024 04:37' }, embarcado: { "name": 'Pedido embarcado na transportadora', "data": '04/11/2024 07:15' }, saiuDestino: { "name": 'Saiu do destino', "data": '04/11/2024 11:27' }})
trackOrders.create({ idPed: "AMPXGKWRT",separacao: { "name": 'Pedido em separação', "data": '03/11/2024 23:15' }, preaparaco: { "name": 'Pedido em preparação', "data": '04/11/2024 04:37' }, embarcado: { "name": 'Pedido embarcado na transportadora', "data": '04/11/2024 07:15' }, saiuDestino: { "name": 'Saiu do destino', "data": '04/11/2024 11:27' }})





}, 1000)

module.exports = trackOrders