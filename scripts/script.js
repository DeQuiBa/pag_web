document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelector(".carousel-slide");
    const totalSlides = document.querySelectorAll(".gallery-block").length;
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    function moveSlide(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }

        const offset = -currentIndex * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }

    // Agregar eventos a los botones
    prevButton.addEventListener("click", () => moveSlide(-1));
    nextButton.addEventListener("click", () => moveSlide(1));

    // Movimiento automático cada 5 segundos
    setInterval(() => moveSlide(1), 10000);
});

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('nav-active');
}
