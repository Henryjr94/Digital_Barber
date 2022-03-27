var express = require('express');
var router = express.Router();
let indexControl = require("../controller/indexControl")

/* GET home page. */
router.get('/', indexControl.getInfo)
router.get('/lista', indexControl.renderLista)
router.get('/listaClientes', indexControl.renderListaClientes)
router.get('/listaAgendamentos', indexControl.listaAgenda)
router.get('/listaCliente', indexControl.listaCliente)

module.exports = router;