// Slider Logic — Fade Transition
function initSlider() {
    const wrapper = document.getElementById('slider-wrapper');
    if (!wrapper) return;

    let currentSlide = 0;

    // Render slides from data
    wrapper.innerHTML = banners.map((b, i) => `
        <div class="slide${i === 0 ? ' active' : ''}">
            <img src="${b.image}" alt="${b.title}">
            <div class="slide-content">
                <h2>${b.title}</h2>
                <p>${b.desc}</p>
                <a href="products.html" class="btn">Khám Phá Ngay</a>
            </div>
        </div>
    `).join('');

    const slides = wrapper.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = index;
        if (currentSlide >= totalSlides) currentSlide = 0;
        if (currentSlide < 0) currentSlide = totalSlides - 1;
        slides[currentSlide].classList.add('active');
    }

    document.getElementById('next-slide').addEventListener('click', () => {
        goToSlide(currentSlide + 1);
        resetInterval();
    });

    document.getElementById('prev-slide').addEventListener('click', () => {
        goToSlide(currentSlide - 1);
        resetInterval();
    });

    // Auto play
    let slideInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, 5000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initSlider();
});
