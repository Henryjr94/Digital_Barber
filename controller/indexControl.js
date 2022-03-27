const database = require('../database/index')
const Agendamento = require('../models/Agendamento')
const Cliente = require('../models/Cliente')

let indexControl = {

    getInfo: async (req, res) => {
        // req.query gets info from the url as a object
        let title = "Home"

        res.render('index', {title})

    },

    // list every entry in json
    listaAgenda: async (req, res) => {
        // gets all the entries
        const agendamentos = await Agendamento.findAll()

        //sends a json to the user
        res.json(agendamentos)
    },

    listaCliente: async (req, res) => {
        // gets all the entries
        const clientes = await Cliente.findAll()

        //sends a json to the user
        res.json(clientes)
    },

    renderLista: (req, res) => {
        let title = "Agendamentos"

        res.render('listaAgendamentos', {title})
    },

    renderListaClientes: (req, res) => {
        let title = "Lista de Clientes"

        res.render('listaClientes', {title})
    }
}

module.exports = indexControl