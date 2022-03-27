const database = require('../database/index')
const Cliente = require('../models/Cliente')

cadastroControl = {

    render: (req,res) => {

        res.render('cadastro')
    },

    saveForm: async (req, res) => {

        database.sync()

        let novoCliente = await Cliente.create(req.body)

        res.redirect('/cadastro/greatsuccess')
    },


    success: (req, res) => {
        res.render('greatSuccess')
    }

}

module.exports = cadastroControl