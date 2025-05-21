document.querySelectorAll('.quick-view').forEach(button => {
    button.addEventListener('click', function() {
        alert('Quick view modal can appear here.');
    });
});

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        alert('Item added to cart!');
    });
});

// Carousel functionality
let currentReview = 0;
const reviews = document.querySelectorAll('.review-card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function updateCarousel() {
    reviews.forEach((review, index) => {
        review.style.transform = `translateX(${(index - currentReview) * 320}px)`;
    });
    prevButton.disabled = currentReview === 0;
    nextButton.disabled = currentReview === reviews.length - 1;
}

prevButton.addEventListener('click', () => {
    if (currentReview > 0) {
        currentReview--;
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {
    if (currentReview < reviews.length - 1) {
        currentReview++;
        updateCarousel();
    }
});

// Show More functionality
document.querySelectorAll('.show-more').forEach(button => {
    button.addEventListener('click', function() {
        const reviewText = this.previousElementSibling;
        if (reviewText.style.webkitLineClamp === '2') {
            reviewText.style.webkitLineClamp = 'none';
            this.textContent = 'Show Less';
        } else {
            reviewText.style.webkitLineClamp = '2';
            this.textContent = 'Show More';
        }
    });
});

updateCarousel(); // Initialize carousel
