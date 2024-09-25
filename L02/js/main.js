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

// Función para iniciar el juego
async function iniciarJuego() {
    while (vivos.length > 1) {
        // Simular el combate en el turno actual
        for (let i = 0; i < vivos.length - 1; i += 2) {
            vivos[i].luchar(vivos[i + 1]);
        }

        // Mostrar el estado actual de la batalla y los jugadores vivos
        mostrarTurno(vivos);

        // Eliminar a los jugadores con salud menor o igual a 0
        vivos = vivos.filter(jugador => jugador._salud > 0);

        // Ordenar aleatoriamente los jugadores restantes
        vivos.sort(() => Math.random() - 0.5);

        // Esperar a que el usuario pulse el botón para continuar
        await new Promise(resolve => {
            // Agregar un botón para avanzar al siguiente turno si no hay ganador
            if (vivos.length > 1) {
                let turnoDiv = document.querySelector('.turno'); // Buscar el último turno en el documento
                let boton = document.createElement('button');
                boton.textContent = 'Siguiente turno';
                boton.classList.add('boton');
                boton.addEventListener('click', () => {
                    // Eliminar el botón para evitar múltiples clics
                    boton.remove();
                    resolve();
                });
                turnoDiv.appendChild(boton);
            } else {
                resolve();
            }
        });

        // Esperar un segundo para visualizar el resultado
        await new Promise(resolve => setTimeout(resolve, 1000));

        iniciarJuego();
    }

    // Si solo queda un jugador, mostrar el ganador
    if (vivos.length === 1) {
        console.log(`El jugador ganador es ${vivos[0]._nombre} de tipo ${vivos[0].constructor.name}`);
        mostrarTurno(vivos);
    } else {
        console.log('No hay ganador, todos han caído.');
    }
}

// Iniciar el juego
iniciarJuego();