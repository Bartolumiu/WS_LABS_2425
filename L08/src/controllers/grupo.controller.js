const Grupo = require('../models/grupo.model');
const Estudiante = require('../models/estudiante.model');

exports.createGrupo = async (req, res, next) => {
    try {
        console.log('Request body:', req.body);
        const grupo = new Grupo(req.body);
        const savedGrupo = await grupo.save();

        console.log('Saved group:', savedGrupo);
        res.status(201).json(savedGrupo);
    } catch (error) {
        next(error);
    }
};

exports.assignEstudianteToGrupo = async (req, res, next) => {
    try {
        const { grupoId, estudianteId } = req.body;
        const grupo = await Grupo.findById(grupoId);
        const estudiante = await Estudiante.findById(estudianteId);

        if (!grupo || !estudiante) {
            return res.status(404).json({
                status: 404,
                error: 'Not Found',
                message: 'Grupo o estudiante no encontrado'
            });
        }

        // Añadir el ID del estudiante al array de estudiantes del grupo si no está ya incluido
        if (grupo.estudiantes.includes(estudianteId)) {
            return res.status(400).json({
                status: 400,
                error: 'Bad Request',
                message: 'El estudiante ya está en el grupo'
            });
        }

        grupo.estudiantes.push(estudianteId);
        await grupo.save();

        res.json(grupo);
    } catch (error) {
        next(error);
    }
};

exports.getGrupos = async (req, res, next) => {
    try {
        const grupos = await Grupo.find().populate('estudiantes');
        res.json(grupos);
    } catch (error) {
        next(error);
    }
};