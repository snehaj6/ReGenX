const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(${-currentIndex * 20}%)`;

    // Update dot state
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});
