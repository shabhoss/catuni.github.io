document.addEventListener('DOMContentLoaded', (event) => {
    const catButton = document.getElementById('catButton');
    const catImage = document.getElementById('catImage');

    const catImages = [
        'cat1.jpg',
        'cat2.jpg',
        'cat3.jpg',
        'cat4.jpg',
        'cat5.jpg'
    ];

    let currentCatIndex = 0;

    catButton.addEventListener('click', () => {
        catImage.src = catImages[currentCatIndex];
        currentCatIndex = (currentCatIndex + 1) % catImages.length;
    });
});