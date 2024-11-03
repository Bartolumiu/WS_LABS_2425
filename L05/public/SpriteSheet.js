/**
 * Class representando una hoja de sprites.
 */
export default class SpriteSheet {
    /**
     * Crea una hoja de sprites.
     * @param {HTMLImageElement} image - Imagen que contiene los sprites.
     * @param {number} width - Ancho de cada sprite.
     * @param {number} height - Alto de cada sprite.
     */
    constructor(image, width, height) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.tiles = new Map();
    }

    /**
     * Define un sprite en la hoja de sprites.
     * @param {string} name - El nombre del sprite.
     * @param {number} x - La coordenada x de la esquina superior izquierda del sprite en la hoja de sprites.
     * @param {number} y - La coordenada y de la esquina superior izquierda del sprite en la hoja de sprites.
     * @param {number} width - El ancho del sprite.
     * @param {number} height - El alto del sprite.
     */
    define(name, x, y, width, height) {
        const buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        buffer.getContext('2d').drawImage(this.image, x, y, width, height, 0, 0, width, height);
        this.tiles.set(name, buffer);
    }

    /**
     * Dibuja un sprite en un contexto.
     * @param {string} name - El nombre del sprite a dibujar.
     * @param {CanvasRenderingContext2D} context - El contexto en el que dibujar el sprite.
     * @param {number} x - La coordenada x para dibujar el sprite.
     * @param {number} y - La coordenada y para dibujar el sprite.
     */
    draw(name, context, x, y) {
        const buffer = this.tiles.get(name);
        context.drawImage(buffer, x, y);
    }
}