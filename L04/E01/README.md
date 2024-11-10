# WS_LABS_2425
## L04 - E01: Pokémon Interactivo

Este ejercicio muestra una colección de sprites de Pokémon en la pantalla que el usuario puede seleccionar y mover utilizando las teclas de flechas del teclado.

### Estructura del Proyecto

El proyecto está organizado en la siguiente estructura

```
E01
├── index.html # Página principal del ejercicio
└── js
    └── pokemon.js # Script principal que controla los Pokémon y sus movimientos
```

### Descripción de Archivos
1. **index.html**: Archivo HTML básico que incluye el script `pokemon.js` para manejar la lógica del ejercicio.
2. **pokemon.js**: Contiene la clase `Pokémon` que define la creación de sprites de Pokémon y gestiona su movimiento en pantalla.

### Funcionalidades
- **Creación de Sprites**: Los sprites de varios Pokémon se generan aleatoriamente en la pantalla al cargar la página.
- **Selección de Pokémon**: Al hacer click en un sprite, el Pokémon correspondiente se selecciona como el "activo" y puede moverse.
- **Movimiento**: El Pokémon activo puede moverse con las teclas de flechas (`ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`).

### Instrucciones de Uso
1. Abrir `index.html` en un navegador.
2. Hacer clic en un sprite de Pokémon para seleccionarlo.
3. Usar las teclas de flechas para mover el Pokémon seleccionado por la pantalla.

### Notas
- La información de los Pokémon se obtiene de la API pública [PokeAPI](https://pokeapi.co/).
- Asegúrate de tener conexión a Internet, ya que los sprites se cargan de forma dinánica desde la API.