const express = require('express');
const router = express.Router();
const grupoController = require('../controllers/grupo.controller');

router.post('/', grupoController.createGrupo);
router.post('/assign', grupoController.assignEstudianteToGrupo);
router.get('/', grupoController.getGrupos);

module.exports = router;