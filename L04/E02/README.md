# WS_LABS_2425
## L04 - E02: Visor de Imágenes

Este ejercicio proporciona una interfaz para ver imágenes desde una URL proporcionada por el usuario y verlas en pantalla completa.

### Estructura del Proyecto

El proyecto está organizado en la siguiente estructura:

```
E02
├── index.html # Página principal del ejercicio
├── css
│   └── style.css # Estilos del visor de imágenes
└── js
    └── script.js # Script principal que controla la carga y visualización de imágenes
```
### Descripción de Archivos
1. **index.html**: Estructura básica de la página con un campo de entrada y botón para cargar la imagen desde una URL.
2. **style.css**: Contiene el estilo visual del visor de imágenes y el comportamiento del modo de pantalla completa.
3. **script.js**: Incluye la lógica para cargar imágenes de forma asíncrona y alternar entre el modo de vista normal y pantalla completa.

### Funcionalidades
- **Carga de Imágenes**: Permite cargar una imagen de una URL introducida en el campo de texto.
- **Vista de Pantalla Completa**: Al hacer clic en la imagen, se activa el modo de pantalla completa, y se puede salir haciendo clic de nuevo.

### Instrucciones de Uso

1. Abrir `index.html` en un navegador.
2. Introducir la URL de una imagen en el campo de texto y hacer clic en el botón "Fetch Image" para cargarla.
3. Hacer clic en la imagen para verla en pantalla completa.

### Notas
- Si la imagen no se carga correctamente, se mostrará un mensaje de error en la consola.
- Las imágenes deben estar accesibles públicamente para que puedan cargarse desde la URL proporcionada.