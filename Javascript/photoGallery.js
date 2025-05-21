let slideIndex = 1;

function openLightbox(n) {
    document.getElementById('lightbox').style.display = 'flex'; // Use flex for centering
    showSlides(slideIndex = n);
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("lightbox-slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// Ensure lightbox doesn't show on page load
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('lightbox').style.display = 'none';
});
