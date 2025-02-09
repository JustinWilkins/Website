document.addEventListener("DOMContentLoaded", function () {
    const parentAccordions = document.querySelectorAll(".accordion-item > .accordion-header");
    const nestedAccordions = document.querySelectorAll(".nested-accordion .accordion-header");

    // Hide nested accordion content initially
    nestedAccordions.forEach(nestedAccordion => {
        const nestedBody = nestedAccordion.nextElementSibling;
        if (nestedBody) {
            nestedBody.style.display = "none";
        }
    });

    document.querySelectorAll(".accordion-header").forEach(header => {
        header.addEventListener("click", function (event) {
            const item = this.closest(".accordion-item");
            const body = item.querySelector(".accordion-content");

            // If this is a nested accordion, prevent event bubbling
            if (item.closest(".nested-accordion")) {
                console.log("Clicked nested:", this.textContent.trim());
                event.stopPropagation(); // Prevent parent from detecting this click
            } else {
                console.log("Clicked parent:", this.textContent.trim());
            }

            // Toggle accordion
            const isActive = item.classList.toggle("active");
            body.style.display = isActive ? "block" : "none";

            // If it's a parent, close all nested accordions when closing
            if (!item.closest(".nested-accordion") && !isActive) {
                item.querySelectorAll(".nested-accordion .accordion-content").forEach(nestedBody => {
                    nestedBody.style.display = "none";
                    nestedBody.closest(".accordion-item").classList.remove("active");
                });
            }
        });
    });
});