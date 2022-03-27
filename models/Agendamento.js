const Sequelize = require("sequelize")
const database = require("../database/index")
const Cliente = require('../models/Cliente')

const Agendamento = database.define('agendamentos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },

    horario: {
        type: Sequelize.DATE,
        // get() {
        //     return moment(this.getDataValue('horario')).format('DD/MM/YYYY h:mm:ss');
        // },
        allowNull: false
    }
}, 
{
    timeStamps: false,
    createdAt: false,
    updatedAt: false
})

Agendamento.belongsTo (Cliente, {
    constraint: true,
    foreignKey: "cliente_id"
})

module.exports = Agendamento