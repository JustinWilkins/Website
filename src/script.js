document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("test-form");
    const modal = document.getElementById("modal");
    const closeModalBtn = document.getElementById("close-modal");
    const modalMessage = document.getElementById("modal-message");
    const tableBody = document.querySelector("#data-table tbody");

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
    });

    const openModalBtn = document.getElementById("open-modal");

    openModalBtn.addEventListener("click", () => {
        modalMessage.textContent = "This is a test modal.";
        modal.classList.remove("hidden");
    });

    closeModalBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    displayStoredData();
});