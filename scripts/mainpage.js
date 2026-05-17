// В конце major.js
const scrollArrow = document.getElementById('scroll-arrow');
const targetSection = document.getElementById('recent-film-section');

if (scrollArrow && targetSection) {
    scrollArrow.addEventListener('click', function(e) {
        e.preventDefault();

        const targetTop = targetSection.getBoundingClientRect().top + window.pageYOffset;
        const startTop = window.pageYOffset;
        const distance = targetTop - startTop;
        const duration = 2000; // 2 секунды
        let startTime = null;

        function animateScroll(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            // Easing функция для плавного замедления
            const ease = 1 - Math.pow(1 - progress, 3);

            window.scrollTo(0, startTop + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animateScroll);
            }
        }

        requestAnimationFrame(animateScroll);
    });
}