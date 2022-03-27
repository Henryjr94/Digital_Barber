const database = require('../database/index')
const Cliente = require('../models/Cliente')

cadastroControl = {

    render: (req,res) => {
        let title = "Cadastro de clientes"

        res.render('cadastro', {title})
    },

    saveForm: async (req, res) => {

        database.sync()

        let novoCliente = await Cliente.create(req.body)

        res.redirect('/cadastro/greatsuccess')
    },


    success: (req, res) => {
        let title = ""

        res.render('greatSuccess', {title})
    }

}

module.exports = cadastroControl