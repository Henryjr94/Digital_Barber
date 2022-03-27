const database = require('../database/index')
const Agendamento = require('../models/Agendamento')
const Cliente = require('../models/Cliente')

let agendamentoControl = {


    render: (req,res) => {
        //render page
        res.render('agendamento')
    },

    // req.body gets the object sent by the form
    saveForm: async (req, res) => {

        // synchronize Sequelize with database
        database.sync()

        // gets info from post(form) and register it into the database
        const novoAgendamento = await Agendamento.create(req.body)

        // redirects to home
        res.redirect('/agendamento/greatsuccess')
    },

    success: (req, res) => {
        res.render('greatSuccess')
    }
}

module.exports = agendamentoControl