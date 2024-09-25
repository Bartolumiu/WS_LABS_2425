import { Humano } from './humano.js';
import { Maquina } from './maquina.js';
import { Extraterrestre } from './extraterrestre.js';
import { mostrarTurno } from './mostrarTurno.js';

// Inicializar un array vacío
let jugadores = [];

// Crear 50 jugadores de cada tipo y añadirlos al array
for (let i = 1; i <= 50; i++) {
    let humano = new Humano(`h${i}`);
    jugadores.push(humano);

    let maquina = new Maquina(`m${i}`);
    jugadores.push(maquina);

    let extraterrestre = new Extraterrestre(`e${i}`);
    jugadores.push(extraterrestre);
}

// Ordenar aleatoriamente los jugadores
jugadores.sort(() => Math.random() - 0.5);

// Crear un array de jugadores vivos
let vivos = jugadores.slice();

// Simular una lucha entre los jugadores
while (vivos.length > 1) {
    // Seleccionar un atacante y la siguiente posición en el array como objetivo
    // En caso de que el array tenga un número impar de jugadores, el último jugador no tendrá un objetivo y pasará el turno
    for (let i = 0; i < vivos.length - 1; i += 2) {
        vivos[i].luchar(vivos[i + 1]);
    }

    // Eliminar a los jugadores con salud menor o igual a 0
    vivos = vivos.filter(jugador => jugador._salud > 0);

    // Ordenar aleatoriamente los jugadores restantes
    vivos.sort(() => Math.random() - 0.5);

    // Mostrar los resultados de cada turno
    mostrarTurno(vivos);
}

// Mostrar el nombre del jugador ganador
console.log(`El jugador ganador es ${vivos[0]._nombre} de tipo ${vivos[0].constructor.name}`);