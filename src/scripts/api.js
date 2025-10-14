document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("/.netlify/functions/data");
    const data = await response.json();

    // About Section
    document.querySelector("section.container p").innerText = data.about.bio;

    // Work Section
    const workContainer = document.querySelector(".nested-accordion");
    workContainer.innerHTML = "";

    data.work.forEach(job => {
      const jobDiv = document.createElement("div");
      jobDiv.className = "accordion-item";
      jobDiv.innerHTML = `
        <h4>${job.company}</h4>
          ${job.roles.map(role => `
            <div class="role">
              <h3>${role.title}</h3>
              <h5>${role.date}</h5>
              <p>${role.details.join("<br>")}</p>
            </div>
          `).join("")}
      `;
      workContainer.appendChild(jobDiv);
    });

  } catch (err) {
    console.error("Error loading API data:", err);
  }
});