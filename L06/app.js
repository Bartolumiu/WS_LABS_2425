const express = require('express');
const fs = require('fs');
const path = require('path');

// Crear el servidor
const app = express();
const PORT = process.env.PORT || 3000;
const tasksFilePath = path.join(__dirname, 'tasks.json');

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para subir las tareas
app.post('/upload', (req, res) => {
    // Guardar las tareas en el archivo
    const { tasks } = req.body;
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2), 'utf8');
    // Enviar una respuesta satisfactoria (HTTP 200 OK)
    res.sendStatus(200);
});

// Ruta para descargar las tareas
app.get('/download', (req, res) => {
    // Verificar si existe el archivo
    if (fs.existsSync(tasksFilePath)) {
        // Leer el archivo y enviarlo como respuesta
        const tasks = JSON.parse(fs.readFileSync(tasksFilePath, 'utf8'));
        res.json({ tasks });
    } else {
        // Enviar una respuesta vacía
        res.json({ tasks: [] });
    };
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});