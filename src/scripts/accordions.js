document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".accordion-content").forEach(c => c.style.display = "none");

    document.querySelectorAll(".accordion-header").forEach(header => {
        header.addEventListener("click", (e) => {
            const item = header.closest(".accordion-item");
            const content = item.querySelector(".accordion-content");

            const isActive = item.classList.toggle("active");
            content.style.display = isActive ? "block" : "none";

            if (item.closest(".nested-accordion")) e.stopPropagation();
        });
    });
});