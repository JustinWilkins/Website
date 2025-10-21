function attachAccordionEvents() {
  document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", (e) => {
      const item = header.closest(".accordion-item");
      const content = item.querySelector(".accordion-content");
      const isActive = item.classList.toggle("active");
      content.style.display = isActive ? "block" : "none";
      if (item.closest(".nested-accordion")) e.stopPropagation();
    });
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("/.netlify/functions/data");
    const data = await response.json();

    const aboutP = document.querySelector("section.container p");
    if (aboutP && data.about && data.about.bio) {
      aboutP.innerText = data.about.bio;
    }

    const workContainer = document.querySelector(".work-accordion .accordion");
    if (workContainer && data.work) {
      workContainer.innerHTML = "";
      data.work.forEach(job => {
        const jobDiv = document.createElement("div");
        jobDiv.className = "accordion-item";
        jobDiv.innerHTML = `
            <button class="accordion-header">${job.company}</button>
            <div class="accordion-content" style="display: none;">
                    <img style="align-items: center;" src="images/${job.company}.png">
                    <p>${job.companyDescription || ""}</p>`
        workContainer.appendChild(jobDiv);
      });
      attachAccordionEvents();
    }

  } catch (err) {
    console.error("Error loading API data:", err);
  }
});