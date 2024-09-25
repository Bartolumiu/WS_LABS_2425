export function mostrarTurno(jugadores) {
    let divTurnos = document.getElementById('turnos');

    // Limpiar el contenedor de turnos para evitar repeticiones
    divTurnos.innerHTML = '';

    let turnoDiv = document.createElement('div');
    turnoDiv.classList.add('turno');
    divTurnos.appendChild(turnoDiv);

    let restantes = document.createElement('h2');
    restantes.textContent = `Restantes: ${jugadores.length}`;
    restantes.classList.add('restantes');
    turnoDiv.appendChild(restantes);

    let batallas = document.createElement('div');
    batallas.classList.add('batallas');
    turnoDiv.appendChild(batallas);

    // Mostrar las batallas de la ronda actual
    for (let i = 0; i < jugadores.length - 1; i += 2) {
        let batalla = document.createElement('div');
        batalla.classList.add('batalla');
        batallas.appendChild(batalla);

        let h5 = document.createElement('h5');
        h5.textContent = `${jugadores[i]._nombre} vs ${jugadores[i + 1]._nombre}`;
        batalla.appendChild(h5);
    }

    // Si hay un jugador sin oponente, lo mostramos como descansando
    if (jugadores.length % 2 !== 0 && jugadores.length > 1) {
        let descanso = document.createElement('div');
        descanso.classList.add('descanso');
        batallas.appendChild(descanso);

        let h5 = document.createElement('h5');
        h5.textContent = `💤 ${jugadores[jugadores.length - 1]._nombre} descansa`;
        descanso.appendChild(h5);
    }

    // Mostrar el estado de los jugadores
    let container = document.createElement('div');
    container.classList.add('tablas');
    turnoDiv.appendChild(container);

    let orden = ['Humano', 'Maquina', 'Extraterrestre'];
    let tipos = new Set(jugadores.map(jugador => jugador.constructor.name));
    tipos = Array.from(tipos).sort((a, b) => orden.indexOf(a) - orden.indexOf(b));

    tipos.forEach(tipo => {
        let section = document.createElement('section');
        container.appendChild(section);

        let h3 = document.createElement('h3');
        h3.textContent = tipo + 's';
        section.appendChild(h3);

        let tabla = document.createElement('table');
        tabla.classList.add('tabla');
        section.appendChild(tabla);

        let thead = document.createElement('tr');
        tabla.appendChild(thead);

        let thNombre = document.createElement('th');
        thNombre.textContent = '🏷️ Nombre';
        thead.appendChild(thNombre);

        let thSalud = document.createElement('th');
        thSalud.textContent = '❤️ Salud';
        thead.appendChild(thSalud);

        jugadores.filter(jugador => jugador.constructor.name === tipo).forEach(jugador => {
            let tr = document.createElement('tr');
            tabla.appendChild(tr);

            let tdNombre = document.createElement('td');
            tdNombre.textContent = jugador._nombre;
            tr.appendChild(tdNombre);

            let tdSalud = document.createElement('td');
            tdSalud.textContent = (jugador._salud > 0) ? jugador._salud : '💀';
            tr.appendChild(tdSalud);
        });
    });

    if (jugadores.length === 1) {
        let ganador = document.createElement('div');
        ganador.classList.add('ganador');
        batallas.appendChild(ganador);

        let h5 = document.createElement('h5');
        h5.textContent = `🏅 ${jugadores[0]._nombre} es el ganador`;
        ganador.appendChild(h5);
    }
}