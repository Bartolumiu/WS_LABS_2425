import SpriteSheet from './SpriteSheet.js';
import loadImage from './loadImage.js';

// Coordenadas de los sprites
const spriteCoords = {
    mario0: { x: 295, y: 0, w: 18, h: 32 },
    mario1: { x: 312, y: 0, w: 18, h: 32 },
    mario2: { x: 330, y: 0, w: 18, h: 32 }
};

// Crear canvas
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

async function main() {
    try {
        const img = await loadImage('https://i1.wp.com/aav255.brandon.courses/img/css-sprites/sprite-supermariocharacters.gif');
        const sprites = new SpriteSheet(img, 18, 32);

        // Definir los sprites
        for (const key in spriteCoords) {
            sprites.define(key, spriteCoords[key].x, spriteCoords[key].y, spriteCoords[key].w, spriteCoords[key].h);
        };

        // Animar los sprites
        let i = 0;
        const spriteKeys = Object.keys(spriteCoords);

        function animate() {
            // Limpiar el canvas
            context.clearRect(0, 0, canvas.width, canvas.height);
            
            // Dibujar el sprite en la posición (100, 100)
            sprites.draw(spriteKeys[i], context, 100, 100);

            // Cambiar el sprite a dibujar (circular, 0, 1, 2, 0, 1, 2...)
            i = (i + 1) % spriteKeys.length;

            // Llamar a la función de nuevo en 100ms (10fps)
            setTimeout(animate, 1000 / 10);
        };

        animate(); // Iniciar la animación
    } catch (error) {
        console.error('Error al cargar la imagen:', error);
    };
};

main(); // Iniciar la aplicación