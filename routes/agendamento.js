var express = require('express');
var router = express.Router();
let agendamentoControl = require('../controller/agendamentoControl')

router.get('/select', agendamentoControl.renderSelect)
router.get('/', agendamentoControl.render)
router.post('/', agendamentoControl.saveForm)
router.get('/greatSuccess', agendamentoControl.success)

module.exports = router;