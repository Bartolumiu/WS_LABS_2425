# SW_2425_L08
## 3 - ¿Qué significa esta línea? (que aparece en el archivo controllers/ikasle.controller.js)
```js
res.status(201).json(savedEstudiante);
```

> 201: Se ha creado un elemento (respuesta "Created" / https://developer.mozilla.org/es/docs/Web/HTTP/Status/201)

## 4 - Crea un estudiante donde su dirección de email sea john.doe (¡sin @!) ¿Te lo permite? ¿Por qué?
> No lo permite. Porque el campo espera algo con el siguiente formato: `usuario@dominio.tld` (el input del correo es de tipo email, por lo que el propio navegador realiza la comprobación del valor introducido)

## 5 - Continuando con el ejercicio anterior, intenta hacer lo mismo mediante curl:
```sh
curl -X POST http://localhost:3000/api/estudiantes \
-H "Content-Type: application/json"
-d '{"nombre": "John Doe", "edad": 25, "email": "john.doe"}'
```
¿Te lo permite?

> Debido a problemas a la hora de ejecutar el comando, se ha realizado la petición con Postman (https://postman.com/)
> 
> Igualmente, se ha recibido la siguiente respuesta de elemento creado:
> 201 Created
```json
{
    "nombre": "John Doe",
    "edad": 25,
    "email": "john.doe",
    "_id": "67598513f18eea968ad408f0",
    "fechaCreacion": "2024-12-11T12:26:59.419Z",
    "__v": 0
}
```

¿Cómo solucionarlo?

> Para solucionar este problema, es necesario incluir el fragmento de código incluido en el enunciado de esta pregunta en el archivo `src/models/estudiante.model.js`
> 
> Tras hacerlo, el archivo quedará de esta manera:
```js
const mongoose = require('mongoose');

const estudianteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        min: 16
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});

// Middlewares
estudianteSchema.pre('save', function(next) {
    this.nombre = this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1);
    next();
});

// Validaciones
estudianteSchema.path('email').validate(function(email) {
    return email.includes('@'); // Validación muy básica que comprueba si el email contiene una @ (no es lo ideal, pero habitualmente suficiente)
}, 'Por favor, introduce un email válido');

module.exports = mongoose.model('Estudiante', estudianteSchema);
```