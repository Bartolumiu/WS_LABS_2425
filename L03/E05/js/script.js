document.addEventListener('DOMContentLoaded', function() {
    let carousel = document.getElementById('image');
    let images = ['images/fresas.jpg', 'images/limon.jpg', 'images/mandarinas.jpg', 'images/manzanas.jpg', 'images/melon.jpg', 'images/sesamo.jpg'];
    let index = 0;
    
    let interval = setInterval(function() {
        carousel.style.backgroundImage = `url(${images[index]})`;
        index = (index + 1) % images.length;
    }, 3000);
    
    carousel.addEventListener('click', function() {
        clearInterval(interval);
        
    });
});