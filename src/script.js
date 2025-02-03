document.addEventListener("DOMContentLoaded", () => {
    // Form Submission
    const form = document.getElementById("test-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const dropdown = document.getElementById("dropdown").value;
        const checkbox = document.getElementById("checkbox").checked;

        alert(`Form Submitted!\nName: ${name}\nDropdown: ${dropdown}\nCheckbox: ${checkbox}`);
    });

    // Dynamic Table Row Addition
    const addRowBtn = document.getElementById("add-row");
    const tableBody = document.querySelector("#data-table tbody");

    addRowBtn.addEventListener("click", () => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>Test User</td>
            <td>Option 1</td>
            <td><button class="delete-row">Remove</button></td>
        `;

        tableBody.appendChild(row);

        // Add event listener for delete button
        row.querySelector(".delete-row").addEventListener("click", () => {
            row.remove();
        });
    });

    // Modal Open/Close
    const openModalBtn = document.getElementById("open-modal");
    const closeModalBtn = document.getElementById("close-modal");
    const modal = document.getElementById("modal");

    openModalBtn.addEventListener("click", () => {
        console.log("Opening modal...");
        modal.classList.remove("hidden");
    });

    closeModalBtn.addEventListener("click", () => {
        console.log("Closing modal...");
        modal.classList.add("hidden");
    });

    // Simulated Test Execution
    const runTestsBtn = document.getElementById("run-tests");
    const testResult = document.getElementById("test-result");

    runTestsBtn.addEventListener("click", () => {
        testResult.textContent = "Running tests...";

        setTimeout(() => {
            testResult.textContent = "✅ All tests passed successfully!";
        }, 2000);
    });
});