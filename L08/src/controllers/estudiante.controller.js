const Estudiante = require('../models/estudiante.model');

exports.getEstudiantes = async (req, res, next) => {
    try {
        const estudiantes = await Estudiante.find();
        res.json(estudiantes);
    } catch (error) {
        next(error);
    }
};

exports.createEstudiante = async (req, res, next) => {
    try {
        const estudiante = new Estudiante(req.body);
        const savedEstudiante = await estudiante.save();
        res.status(201).json(savedEstudiante);
    } catch (error) {
        next(error);
    }
};

exports.getEstudianteById = async (req, res, next) => {
    try {
        const estudiante = await Estudiante.findById(req.params.id);
        if (!estudiante) {
            return res.status(404).json({
                status: 404,
                error: 'Not Found',
                message: 'No se ha encontrado el estudiante'
            });
        }
        res.json(estudiante);
    } catch (error) {
        next(error);
    }
};

// Añade el resto de controladores...
exports.deleteEstudianteById = async (req, res, next) => {
    try {
        const estudiante = await Estudiante.findByIdAndDelete(req.params.id);
        if (!estudiante) {
            return res.status(404).json({
                status: 404,
                error: 'Not Found',
                message: 'No se ha encontrado el estudiante'
            }); // La ID no existe, por lo que no se ha eliminado nada (404 Not Found)
        }
        res.json(estudiante); // Devuelve el estudiante eliminado (200 OK)
    } catch (error) {
        next(error); // Ha ocurrido un error, por lo que se pasa al handler de errores (middleware/error.middleware.js)
    }
}

exports.updateEstudianteById = async (req, res, next) => {
    try {
        const estudiante = await Estudiante.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!estudiante) {
            return res.status(404).json({
                status: 404,
                error: 'Not Found',
                message: 'No se ha encontrado el estudiante'
            });
        }

        res.json(estudiante);
    } catch (error) {
        next(error);
    }
}