document.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.getElementById("open-modal");
    const closeModalBtn = document.getElementById("close-modal");
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");

    openModalBtn.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });

    closeModalBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });
});