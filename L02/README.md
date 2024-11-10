# WS_LABS_2425
## L02 - POO en JavaScript

Aplicación web que simula combates entre diferentes tipos de jugadores (Humanos, Máquinas y Extraterrestres). La simulación está implementada en JavaScript utilizando clases y módulos para definir el comportamiento de cada tipo de jugador y mostrar el estado de lo combates en cada turno.

### Estructura del Proyecto

El proyecto está organizado en la siguiente estructura:

```
L02
├── index.html # Página principal de la aplicación
├── js
│   ├── extraterrestre.js # Clase que representa a un jugador extraterrestre
│   ├── humano.js # Clase que representa a un jugador humano
│   ├── jugador.js # Clase base que define las propiedades comunes de los jugadores
│   ├── main.js # Script principal que controla la lógica de combate
│   ├── maquina.js # Clase que representa a un jugador máquina
│   └── mostrarTurno.js # Función para mostrar el estado de cada turno
├── css
│   └── style.css # Estilos de la interfaz
```

### Descripción de Archivos
1. **index.html**: Contiene la estructura de la página web y enlaza los scripts y estilos necesarios para la simulación.
2. **extraterrestre.js**: Define la clase `Extraterrestre`, que hereda de `Jugador` y establece las características propias de este tipo de jugador.
3. **humano.js**: Define la clase `Humano`, que también hereda de `Jugador` y contiene atributos específicos de este tipo.
4. **jugador.js**: Clase base `Jugador` que proporciona propiedades comunes como `nombre`, `fuerza` y `salud`, así como métodos para simular combates entre jugadores.
5. **main.js**: Controla la lógica principal del proyecto:
    - Genera jugadores de cada tipo y los organiza en un combate.
    - Simula los turnos de combate y actualiza la lista de jugadores vivos hasta que haya un ganador.
    - Gestiona la visualización del estado actual en la interfaz.
6. **maquina.js**: Define la clase `Maquina`, que hereda de `Jugador` y asigna características específicas a los jugadores de tipo máquina.
7. **mostrarTurno.js**: Función `mostrarTurno` que genera el HTML necesario para mostrar el estado de cada turno, incluyendo las batallas actuales y los jugadores restantes.
8. **style.css**: Contiene los estilos de la interfaz, aplicando un diseño estructurado y estilizado para mostrar los turnos, batallas y el estado de cada jugador.

### Instrucciones de Uso

1. Abrir `index.html` en un navegador.
2. Para avanzar al siguiente turno, pulsar en el botón "Siguiente turno"
3. En caso de querer reiniciar la simulación, refrescar la página.

### Notas
- La simulación distribuye aleatoriamente a los jugadores y actualiza sus estados tras cada combate.
- Los jugadores combaten en parejas y el vencedor de cada combate se decide aleatoriamente según su fuerza.
- Cada tipo de jugador tiene atributos específicos de fuerza y salud, lo que afecta los resultados de los combates.

### Créditos
Este proyecto forma parte de los laboratorios prácticos de la asignatura `Sistemas Web / Web Sistemak` de la `Universidad del País Vasco / Euskal Herriko Unibertsitatea (UPV/EHU)` y cubre el uso de clases en JavaScript.