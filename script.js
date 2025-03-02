const images = [
    'Images/car1.jpg',
    'Images/car2.jpg',
    'Images/car3.jpg',
    'Images/car4.jpg',
    'Images/car5.jpg',
    'Images/car6.jpg',
    'Images/car7.jpg',
    'Images/car8.jpg',
    'Images/car9.jpg',
    'Images/car10.jpg'
];

const hero = document.querySelector('.hero');
let currentImageIndex = 0;

// Preload all images to avoid delays
function preloadImages(imageArray) {
    imageArray.forEach((src) => {
        const img = new Image();
        img.src = src;
    });
}

function changeBackgroundImage() {
    hero.style.backgroundImage = `url('${images[currentImageIndex]}')`; // Update only the image
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Preload images before starting the slideshow
preloadImages(images);

// Start the slideshow
setInterval(changeBackgroundImage, 5000);
changeBackgroundImage();