const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// JSON middleware
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/express-mongoose')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

// Definir esquema de usuario
const userSchema = new mongoose.Schema({
    usuario: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true, minlength: 3, maxlength: 20 },
    edad: { type: Number, required: true, min: 18 }
});

// Crear modelo de usuario
const Usuario = mongoose.model('Usuario', userSchema, 'usuarios');

// Rutas
// GET /
// Bienvenida a la API
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de usuarios!');
});

// GET /usuarios
// Obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (err) {
        res.status(500).json({ mensaje: 'Error al obtener usuarios', err });
    };
});

// POST /usuarios
// Crear un nuevo usuario
app.post('/usuarios', async (req, res) => {
    try {
        const { usuario, nombre, email, edad } = req.body;
        const nuevoUsuario = new Usuario({ usuario, nombre, email, edad });
        await nuevoUsuario.save();

        res.status(201).json(nuevoUsuario);
    } catch (err) {
        res.status(400).json({ mensaje: 'Error al crear el usuario', err });
    }
});

// PATCH /actualizar-esquema-edad
// Actualizar edad de usuarios menores de 18 años a 18 años
app.patch('/actualizar-esquema-edad', async (req, res) => {
    try {
        const resultado = await Usuario.updateMany({ edad: { $lt: 18 } }, { $set: { edad: 18 } });

        res.json({ mensaje: 'Usuarios actualizados correctamente', resultado });
    } catch (err) {
        res.status(500).json({ mensaje: 'Error al actualizar documentos', err });
    };
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});