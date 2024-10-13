document.addEventListener('DOMContentLoaded', () => {
    const imageElement = document.getElementById('image');
    const urlInput = document.getElementById('url');
    const fetchButton = document.getElementById('fetch');

    fetchButton.addEventListener('click', () => {
        const imageUrl = urlInput.value;

        loadImage(imageUrl).then(img => {
            console.log(`Width: ${img.width}, Height: ${img.height}`);
            imageElement.src = imageUrl;
        }).catch(err => console.error(err));
    });

    imageElement.addEventListener('click', () => {
        imageElement.classList.toggle('fullscreen');
    });
});

function loadImage(url) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
    });
};