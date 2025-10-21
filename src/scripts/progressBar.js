document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("test-form");
    const progressBar = document.getElementById("progress-bar");
    const updateProgressBtn = document.getElementById("update-progress");

    updateProgressBtn.addEventListener("click", () => {
        let width = parseInt(progressBar.style.width) || 0;
        if (width < 100) {
            width += 10;
            progressBar.style.width = width + "%";
        }
    });


});