# WS_LABS_2425
## L05 - Canvas

Aplicación web simple que muestra una animación de Mario corriendo utilizando una hoja de sprites. La animación se implementa en JavaScript usando `Canvas` y gestiona los sprites a través de clases y módulos.

### Estructura del proyecto

El proyecto está organizado en la siguiente estructura:

```
L05
├── public
│   ├── index.html # Página principal de la aplicación
│   ├── index.js # Script principal para cargar y animar el sprite
│   ├── loadImage.js # Módulo para cargar imágenes de forma asíncrona
│   └── SpriteSheet.js # Clase para gestionar la hoja de sprites
└── package.json # Archivo de configuración de Node.js
```

### Descripción de archivos
1. **index.html**: Contiene la estructura de la página web y el script para la animación.
2. **index.js**: Controla la lógica principal del proyecto:
    - Crea un elemento `Canvas` y lo añade al `DOM`.
    - Carga una imagen de la hoja de sprites de Mario.
    - Define los sprites individuales (mario0, mario1, mario2) y gestiona la animación en un ciclo para simular que Mario está corriendo.
3. **loadImage.js**: Define la función `loadImage`, que carga una imagen de forma asíncrona. Esta función devuelve una promesa que se resuelve cuando la imagen se carga correctamente.
4. **SpriteSheet.js**: Clase `SpriteSheet` para gestionar los sprites de Mario:
    - Define y almacena diferentes sprites de la hoja de sprites.
    - Dibuja un sprite específico en el contexto `Canvas`.

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
- `serve`: Servidor de desarrollo ligero para servir archivos estáticos.

### Notas
- La animación de Mario utiliza un `setTimeout` de 100ms (10fps) para cambiar entre los sprites, creando la ilusión de movimiento.
- La hoja de sprites se carga desde una URL externa. Asegúrate de tener conexión a Internet para que la imagen cargue correctamente.

### Créditos
Este proyecto forma parte de los laboratorios prácticos de la asignatura `Sistemas Web / Web Sistemak` de la `Universidad del País Vasco / Euskal Herriko Unibertsitatea (UPV/EHU)` y cubre el uso de animaciones en `Canvas` con JavaScript y la manipulación de sprites.