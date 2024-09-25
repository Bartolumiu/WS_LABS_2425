/**
 * Representa un jugador.
 * @version SW_2425_L02
 * 
 * @param {string} nombre - Nombre del jugador.
 * @param {number} fuerza - Fuerza del jugador.
 * @param {number} salud - Salud del jugador.
 */

class Jugador {

    /**
     * Creates una instancia de un Jugador.
     * 
     * @constructor
     * @param {string} nombre - Nombre del jugador.
     * @param {number} fuerza - Fuerza del jugador.
     * @param {number} salud - Salud del jugador.
     */
    constructor(nombre, fuerza, salud) {
        this._nombre = nombre;
        this._fuerza = fuerza;
        this._salud = salud;
    }

    /**
     * Simula una lucha entre este jugador y otro jugador.
     * 
     * @param {Jugador} objetivo - El objetivo contra el que luchar.
     * @throws {Error} Error si el objetivo no es un jugador.
     */
    luchar(objetivo) {
        if (!(objetivo instanceof Jugador)) throw new Error('El objetivo no es un jugador'); // Para asegurarnos de que el objetivo es un jugador o de alguna clase que herede de Jugador
        if (Math.random() * this._fuerza > objetivo._fuerza) objetivo._salud -= this._fuerza;
        else this._salud -= objetivo._fuerza;
    }

    /**
     * Devuelve el nombre del jugador.
     * @returns {string} El nombre del jugador.
     */
    get nombre() {
        return this._nombre;
    }
}

export { Jugador };