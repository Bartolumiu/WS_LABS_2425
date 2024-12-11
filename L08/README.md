# WS_LABS_2425
## L08 - MongoDB + Express (mongoose + EJS)

Aplicación web para gestionar estudiantes y grupos utilizando `ExpressJS` como servidor y `Mongoose` para interactuar con `MongoDB`. La aplicación permite crear, leer, actualizar y gestionar estudiantes y grupos con esquemas definidos que incluyen validaciones como el email válido y la edad mínima de 16 años.

### Estructura del proyecto

El proyecto está organizado en la siguiente estructura:

```
L08
├── src
│   ├── config
│   │   └── database.js # Módulo de conexión a MongoDB
│   ├── controllers
│   │   ├── estudiante.controller.js # Controlador de métodos de estudiantes
│   │   └── grupo.controller.js # Controlador de métodos de grupos
│   ├── middleware
│   │   └── error.middleware.js # Handler de errores
│   ├── models # Esquemas de datos para MongoDB
│   │   ├── estudiante.model.js # Esquema de estudiante para MongoDB
│   │   └── grupo.model.js # Esquema de grupo para MongoDB
│   ├── routes # Rutas de la API
│   │   ├── estudiante.routes.js # Rutas de la API para estudiantes
│   │   └── grupo.routes.js # Rutas de la API para grupos
│   ├── views
│   │   ├── index.ejs
│   │   └── test.ejs
│   └── app.js # Servidor ExpressJS configurado con Mongoose
└── package.json # Dependencias y configuración del proyecto
```

### Descripción de Archivos
1. **database.js**: Módulo de conexión a MongoDB.
2. **estudiante.controller.js**: Controlador de métodos para estudiantes, incluyendo crear, obtener todos, obtener uno, actualizar y borrar.
3. **grupo.controller.js**: Controlador de métodos para grupos, incluyendo crear, obtener todos y asignar estudiantes.
4. **error.middleware.js**: Middleware para gestionar errores de la aplicación.
5. **estudiante.model.js**: Define el esquema de estudiante para MongoDB con validaciones de edad y email.
6. **grupo.model.js**: Define el esquema de grupo para MongoDB con validaciones de nombre y descripción.
7. **estudiante.routes.js**: Rutas de la API para estudiantes.
    - Rutas:
        - `GET /api/estudiantes`: Obtiene todos los estudiantes almacenados en la base de datos.
        - `GET /api/estudiantes/:id`: Obtiene un estudiante por su ID.
        - `POST /api/estudiantes`: Crea un nuevo estudiante con los datos proporcionados en el cuerpo de la solicitud.
        - `DELETE /api/estudiantes/:id`: Borra un estudiante por su ID.
        - `PUT /api/estudiantes/:id`: Actualiza un estudiante por su ID.
8. **grupo.routes.js**: Rutas de la API para grupos.
    - Rutas:
        - `GET /api/grupos`: Obtiene todos los grupos almacenados en la base de datos.
        - `POST /api/grupos`: Crea un nuevo grupo con los datos proporcionados en el cuerpo de la solicitud.
        - `POST /api/grupos/assign`: Asigna un estudiante a un grupo por sus IDs.
9. **index.ejs**: Vista principal de la aplicación.
10. **test.ejs**: Vista de la ruta /test de la aplicación.
11. **app.js**: Configura el servidor utilizando ExpressJS y Mongoose, define los esquemas de estudiante y grupo, y gestiona las rutas de la API.
    - Rutas:
        - `GET /`: Ruta de prueba que devuelve un mensaje de bienvenida.
        - `GET /test`: Ruta que renderiza una vista EJS.

### Instrucciones de Uso

1. Instalar las dependencias
    ```sh
    npm install
    ```
2. Iniciar el servidor
    ```sh
    npm start
    ```
3. Acceder a la aplicación en [http://localhost:3000](http://localhost:3000)

### Dependencias
- `express`: Framework para el servidor HTTP.
- `mongoose`: Librería para interactuar con MongoDB.
- `ejs`: Motor de plantillas para renderizar vistas.

### Notas
- Asegúrate de tener `MongoDB` en funcionamiento en tu máquina local o en un servidor remoto para poder interactuar con la base de datos.
- Los esquemas de estudiante y grupo aseguran que los estudiantes tengan una edad mínima de 16 años y un email válido, y que los grupos tengan un nombre únicos y no se repitan los estudiantes asignados a un grupo.

### Créditos
Este proyecto forma parte de los laboratorios prácticos de la asignatura `Sistemas Web / Web Sistemak` de la `Universidad del País Vasco / Euskal Herriko Unibertsitatea (UPV/EHU)` y cubre el uso de `Mongoose` para interactuar con `MongoDB` en un servidor `ExpressJS` con vistas `EJS`.
```