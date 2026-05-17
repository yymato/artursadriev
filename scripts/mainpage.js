// Плавный скролл по стрелке
const scrollArrow = document.getElementById('scroll-arrow');
const targetSection = document.getElementById('recent-film-section');

if (scrollArrow && targetSection) {
    scrollArrow.addEventListener('click', function() {
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}