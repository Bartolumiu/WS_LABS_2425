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
        super(nombre, Math.floor(Math.random() * 99 + 1), 130);
    }
}

export { Maquina };