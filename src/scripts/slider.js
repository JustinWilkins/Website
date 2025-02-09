document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.getElementById("prevBtn");
    const nextButton = document.getElementById("nextBtn");

    let currentSlide = parseInt(localStorage.getItem("currentSlide")) || 0;

    function showSlide(index) {
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === currentSlide);
        });

        localStorage.setItem("currentSlide", currentSlide);
    }

    prevButton.addEventListener("click", () => showSlide(currentSlide - 1));
    nextButton.addEventListener("click", () => showSlide(currentSlide + 1));

    showSlide(currentSlide);
});