const express = require('express');
const router = express.Router();
const estudianteController = require('../controllers/estudiante.controller');

router.get('/', estudianteController.getEstudiantes);
router.post('/', estudianteController.createEstudiante);
router.get('/:id', estudianteController.getEstudianteById);


// Añadir el resto de routas...
router.delete('/:id', estudianteController.deleteEstudianteById);
router.put('/:id', estudianteController.updateEstudianteById);

module.exports = router;