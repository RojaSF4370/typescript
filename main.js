// export{}
var images = [
    { url: 'img/anime.jpg', caption: 'Anime' },
    { url: 'img/book.jpg', caption: 'book' },
    { url: 'img/camera.jpg', caption: 'camera' },
    { url: 'img/car.jpg', caption: 'Car' },
    { url: 'img/disk.jpg', caption: 'disk' },
    { url: 'img/fall.jpg', caption: 'fall' },
    { url: 'img/music.jpg', caption: 'music' },
    { url: 'img/panda.jpg', caption: 'panda' },
    { url: 'img/thug.jpg', caption: 'thug' },
    { url: 'img/tulip.jpg', caption: 'tulip' },
];
var slideIndex = 1;
document.addEventListener('DOMContentLoaded', function () {
    // Dynamically load images and captions
    var slideshowContainer = document.getElementById('slideshow-container');
    var controlsContainer = document.querySelector('.controls');
    images.forEach(function (image, index) {
        var slideDiv = document.createElement('div');
        slideDiv.className = 'mySlides';
        slideDiv.style.display = index === 0 ? 'block' : 'none';
        var imgElement = document.createElement('img');
        imgElement.src = image.url;
        imgElement.alt = "Image " + (index + 1);
        var captionDiv = document.createElement('div');
        captionDiv.id = 'caption';
        captionDiv.innerText = image.caption;
        slideDiv.appendChild(imgElement);
        slideDiv.appendChild(captionDiv);
        slideshowContainer.appendChild(slideDiv);
    });
    controlsContainer.style.display = 'block'; // Show the controls
});
// Function to navigate to next/previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}
// Function to show slides
function showSlides(index) {
    var slides = document.getElementsByClassName('mySlides');
    var captions = document.getElementById('caption');
    if (index > slides.length) {
        slideIndex = 1;
    }
    if (index < 1) {
        slideIndex = slides.length;
    }
    // Hide all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    // Display current slide
    slides[slideIndex - 1].style.display = 'block';
    // Display caption for current slide
    captions.innerText = images[slideIndex - 1].caption;
}
