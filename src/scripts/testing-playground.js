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

    // Form data html construction
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

    // Form submission event listener
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

        // Show toast notification
        toast.classList.remove("hidden");
        setTimeout(() => toast.classList.add("hidden"), 3000);
    });

    // Modal open and close
    const openModalBtn = document.getElementById("open-modal");

    openModalBtn.addEventListener("click", () => {
        modalMessage.textContent = "This is a test modal.";
        modal.classList.remove("hidden");
    });

    closeModalBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    // Accordion functionality
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

    // Progress bar update functionality
    updateProgressBtn.addEventListener("click", () => {
        let width = parseInt(progressBar.style.width) || 0;
        if (width < 100) {
            width += 10;
            progressBar.style.width = width + "%";
        }
    });

    // Drag-and-drop functionality
    dragItem.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text", event.target.id);
    });

    dropZone.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    dropZone.addEventListener("drop", (event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        const draggedElement = document.getElementById(data);
        dropZone.appendChild(draggedElement);
    });

    // Display stored data when the page loads
    displayStoredData();
});