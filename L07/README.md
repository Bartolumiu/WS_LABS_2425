# WS_LABS_2425
## L07 - ExpressJS + MongoDB

Aplicación web para gestionar usuarios utilizando `ExpressJS` como servidor y `Mongoose` para interactuar con `MongoDB`. La aplicación permite crear, leer, actualizar y gestionar usuarios con un esquema definido que incluye validaciones como el email único y la edad mínima de 18 años.

### Estructura del Proyecto

El proyecto está organizado en la siguiente estructura:

```
L07
├── index.js # Servidor ExpressJS configurado con Mongoose
└── package.json # Dependencias y configuración del proyecto
```

### Descripción de Archivos
1. **index.js**: Configura el servidor utilizando ExpressJS y Mongoose, define el esquema de usuario y gestiona las rutas de la API.
    - Rutas:
        - `GET /`: Ruta de prueba que devuelve un mensaje de bienvenida.
        - `GET /usuarios`: Obtiene todos los usuarios almacenados en la base de datos.
        - `POST /usuarios`: Crea un nuevo usuario con los datos proporcionados en el cuerpo de la solicitud.
        - `PATCH /actualizar-esquema-edad`: Actualiza todos los usuarios cuya edad sea menor de 18 a 18.

### Instrucciones de Uso

1. Instalar las dependencias
    ```sh
    npm install
    ```
2. Iniciar el servidor
    ```sh
    npm start
    ```

### Dependencias
- `express`: Framework para el servidor HTTP.
- `mongoose`: Librería para interactuar con MongoDB.

### Notas
- Asegúrate de tener `MongoDB` en funcionamiento en tu máquina local o en un servidor remoto para poder interactuar con la base de datos.
- La validación del esquema asegura que los usuarios tengan un email único, una edad mínima de 18 años y un nombre de usuario único.

### Créditos
Este proyecto forma parte de los laboratorios prácticos de la asignatura `Sistemas Web / Web Sistemak` de la `Universidad del País Vasco / Euskal Herriko Unibertsitatea (UPV/EHU)` y cubre el uso de `Mongoose` para interactuar con `MongoDB` en un servidor `ExpressJS`.