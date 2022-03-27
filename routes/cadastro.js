var express = require('express');
var router = express.Router();
let cadastroControl = require('../controller/cadastroControl')

router.get('/', cadastroControl.render)
router.post('/', cadastroControl.saveForm)
router.get('/greatSuccess', cadastroControl.success)

module.exports = router;
