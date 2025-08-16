document.addEventListener("DOMContentLoaded", () => {
    // Hide all contents initially
    document.querySelectorAll(".accordion-content").forEach(c => c.style.display = "none");

    // Add click event to all headers
    document.querySelectorAll(".accordion-header").forEach(header => {
        header.addEventListener("click", (e) => {
            const item = header.closest(".accordion-item");
            const content = item.querySelector(".accordion-content");

            // Toggle current accordion
            const isActive = item.classList.toggle("active");
            content.style.display = isActive ? "block" : "none";

            // Stop nested from closing parent
            if (item.closest(".nested-accordion")) e.stopPropagation();
        });
    });
});