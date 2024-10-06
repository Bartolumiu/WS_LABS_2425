import { Jugador } from './jugador.js';

/**
 * Representa a una máquina.
 * @version SW_2425_L02
 * 
 * @extends {Jugador}
 * 
 * @param {string} nombre - Nombre de la máquina.
 */
class Maquina extends Jugador {
    /**
     * Crea una instancia de una máquina.
     * 
     * @constructor
     * @param {string} nombre - Nombre de la máquina.
     */
    constructor(nombre) {
        // Versiones alternativas cálculo fuerza
        // Math.floor(Math.random() * 100 + 1)
        // Math.ceil(Math.random() * 100)
        super(nombre, Math.round(Math.random() * 99 + 1), 130); // [1-100]
    }
}

export { Maquina };