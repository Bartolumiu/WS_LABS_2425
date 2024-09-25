import { Jugador } from "./jugador.js";

/**
 * Representa a un extraterrestre.
 * @version SW_2425_L02
 * 
 * @class Extraterrestre
 * @extends {Jugador}
 * 
 * @param {string} nombre - Nombre del extraterrestre.
 */
class Extraterrestre extends Jugador {
    /**
     * Crea una instancia de un extraterrestre.
     * 
     * @constructor
     * @param {string} nombre - Nombre del extraterrestre.
     */
    constructor(nombre) {
        super(nombre, Math.floor(Math.random() * 84 + 1), 150);
    }
}

export { Extraterrestre };