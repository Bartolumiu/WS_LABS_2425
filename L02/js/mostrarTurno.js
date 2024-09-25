export function mostrarTurno(jugadores) {
    let divTurnos = document.getElementById('turnos');
    
    // Crear un apartado en el documento HTML para mostrar los resultados de cada turno
    let turno = document.createElement('div');
    turno.classList.add('turno');
    divTurnos.appendChild(turno);

    let restantes = document.createElement('h2');
    restantes.textContent = `Restantes: ${jugadores.length}`;

    restantes.classList.add('restantes');
    turno.appendChild(restantes);

    // Separar los jugadores por tipo y mostrarlos en el documento HTML
    let tipos = new Set(jugadores.map(jugador => jugador.constructor.name));

    // Mostrar los jugadores y su salud en el documento HTML por tipo a través de 3 tablas (una por tipo)
    /*
    <div id="turnos">
        <div class="turno">
            <h2 class="restantes">Restantes: 150</h2>
            <div class="container">
                <h3>Humano</h3>
                <table class="tabla">
                    <tr>
                        <th>Nombre</th>
                        <th>Salud</th>
                    </tr>
                    <tr>
                        <td>h1</td>
                        <td>150</td>
                    </tr>
                    ...
                </table>
                ...
            </div>
        </div>
    </div>
    */
    let container = document.createElement('div');
    container.classList.add('tablas');
    turno.appendChild(container);
    
    let orden = ['Humano', 'Maquina', 'Extraterrestre'];
    tipos = Array.from(tipos).sort((a, b) => orden.indexOf(a) - orden.indexOf(b));
    tipos.forEach(tipo => {
        let section = document.createElement('section');
        container.appendChild(section);

        let h3 = document.createElement('h3');
        h3.textContent = tipo;
        section.appendChild(h3);

        let tabla = document.createElement('table');
        tabla.classList.add('tabla');
        section.appendChild(tabla);

        let thead = document.createElement('th');
        tabla.appendChild(thead);

        let thNombre = document.createElement('h4');
        thNombre.textContent = '🏷️ Nombre';
        thead.appendChild(thNombre);

        let thSalud = document.createElement('h4');
        thSalud.textContent = '❤️ Salud';
        thead.appendChild(thSalud);

        jugadores.filter(jugador => jugador.constructor.name === tipo).forEach(jugador => {
            let tr = document.createElement('tr');
            tabla.appendChild(tr);

            let tdNombre = document.createElement('td');
            tdNombre.textContent = jugador._nombre;
            tr.appendChild(tdNombre);

            let tdSalud = document.createElement('td');
            tdSalud.textContent = jugador._salud;
            tr.appendChild(tdSalud);
        });
    });

    // Hacer scroll automático al final de la página
    //window.scrollTo(0, document.body.scrollHeight);
}