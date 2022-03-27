const database = require('../database/index')
const Agendamento = require('../models/Agendamento')
const Cliente = require('../models/Cliente')

let agendamentoControl = {


    renderSelect: (req,res) => {
        let title = "Clientes"

        res.render('agendamentoSelect', {title})
    },

    render: (req,res) => {
        //render page
        let {nome} = req.query
        let title = "Clientes"

        res.render('agendamento', {nome, title})
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
        let title = ""

        res.render('greatSuccess', {title})
    }
}

module.exports = agendamentoControl