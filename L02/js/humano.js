import { Jugador } from './jugador.js';

/**
 * Representa a un jugador humano.
 * @version SW_2425_L02
 * 
 * @class Humano
 * @extends {Jugador}
 * 
 * @param {string} nombre - Nombre del jugador.
 */
class Humano extends Jugador {
    /**
     * Crea una instancia de un jugador humano.
     * 
     * @constructor
     * @param {string} nombre - Nombre del jugador.
     */
    constructor(nombre) {
        super(nombre, 70, 150);
    }
}

export { Humano };