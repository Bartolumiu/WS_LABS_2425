# WS_LABS_2425
## L06 - LocalStorage + ExpressJS

Aplicación web simple de gestión de tareas que permite agregar, borrar, subir y bajar tareas desde `localStorage` en el lado del cliente y un servidor `ExpressJS` en el lado del servidor. La aplicación interactúa con el almacenamiento local del navegador y sincroniza las tareas con el servidor para guardarlas en el sistema de archivos.

### Estructura del Proyecto

El proyecto está organizado en la siguiente estructura:

```
L06
├── public
│   ├── index.html # HTML de la página principal
│   └── main.js # JavaScript del lado del cliente
└── app.js # Servidor ExpressJS del lado del servidor
```

### Descripción de Archivos
1. **index.html**: Contiene el diseño básico de la página web, incluyendo el campo de entrada para tareas y los botones de control. Los elementos principales incluyen:
    - Un campo de texto (`input`) para ingresar nombres de tareas.
    - Un botón para agregar tareas.
    - Botones para borrar todas las tareas, subirlas al servidor y descargarlas desde el servidor.
    - Una lista (`ul`) donde se mostrarán las tareas.
2. **main.js**: Controla la funcionalidad del lado del cliente, incluyendo la gestión de `localStorage`, manipulación del DOM y envío de peticiones HTTP al servidor.
    - **Funciones Principales**:
      - `loadTasks`: Carga las tareas almacenadas en `localStorage` y las muestra en la lista.
      - `addTask`: Agrega una nueva tarea al `localStorage` y actualiza la lista.
      - `clearTasks`: Borra todas las tareas en `localStorage` y actualiza la lista.
      - `uploadTasks`: Envía las tareas almacenadas en `localStorage` al servidor mediante una petición `POST`.
      - `downloadTasks`: Recupera las tareas del servidor y las guarda en `localStorage` para visualizarlas en la lista.
3. **app.js**: Configura el servidor usando `ExpressJS`, procesa las peticiones HTTP y gestiona el almacenamiento en el sistema de archivos.
    - **Rutas**:
      - `POST /upload`: Guarda las tareas enviadas desde el cliente en un archivo `tasks.json` en el servidor.
      - `GET /download`: Lee las tareas desde `tasks.json` y las envía al cliente.

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

### Notas
- Asegúrate de que el servidor esté ejecutándose antes de instentar usar las opciones de subida y descarga de tareas.
- El almacenamiento de tareas en el servidor se realiza en un archivo `tasks.json` en el directorio raíz del proyecto.

### Créditos
Este proyecto forma parte de los laboratorios prácticos de la asignatura `Sistemas Web / Web Sistemak` de la `Universidad del País Vasco / Euskal Herriko Unibertsitatea (UPV/EHU)` y cubre el uso de `localStorage` en combinación con un servidor `ExpressJS`.