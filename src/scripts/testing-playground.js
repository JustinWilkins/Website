document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("test-form");
    const modal = document.getElementById("modal");
    const closeModalBtn = document.getElementById("close-modal");
    const modalMessage = document.getElementById("modal-message");
    const tableBody = document.querySelector("#data-table tbody");
    const toast = document.getElementById("toast");
    const progressBar = document.getElementById("progress-bar");
    const updateProgressBtn = document.getElementById("update-progress");
    const dragItem = document.getElementById("drag-item");
    const dropZone = document.getElementById("drop-zone");
    const accordionItems = document.querySelectorAll(".accordion-item");

    function displayStoredData() {
        const storedData = JSON.parse(localStorage.getItem('formData')) || [];
        tableBody.innerHTML = '';
        storedData.forEach((data) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${data.name}</td>
                <td>${data.dropdown}</td>
                <td>${data.checkbox ? "Checked" : "Not Checked"}</td>
                <td><button class="delete-row">Remove</button></td>
            `;
            tableBody.appendChild(row);

            row.querySelector(".delete-row").addEventListener("click", () => {
                deleteRow(data);
                row.remove();
            });
        });
    }

    function deleteRow(dataToDelete) {
        let storedData = JSON.parse(localStorage.getItem('formData')) || [];
        storedData = storedData.filter(data => data.name !== dataToDelete.name || data.dropdown !== dataToDelete.dropdown);
        localStorage.setItem('formData', JSON.stringify(storedData));
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const dropdown = document.getElementById("dropdown").value;
        const checkbox = document.getElementById("checkbox").checked;

        if (!name || !dropdown) {
            modalMessage.textContent = "Please fill in all required fields.";
            modal.classList.remove("hidden");
            return;
        }

        const newData = { name, dropdown, checkbox };

        const storedData = JSON.parse(localStorage.getItem('formData')) || [];
        storedData.push(newData);
        localStorage.setItem('formData', JSON.stringify(storedData));

        displayStoredData();
        form.reset();

        toast.classList.remove("hidden");
        setTimeout(() => toast.classList.add("hidden"), 3000);
    });

    accordionItems.forEach(item => {
        const content = item.querySelector(".accordion-content");

        content.style.display = "none";

        const header = item.querySelector(".accordion-header");
        header.addEventListener("click", () => {
            if (content.style.display === "none") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });

    displayStoredData();
});