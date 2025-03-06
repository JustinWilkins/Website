document.addEventListener("DOMContentLoaded", function () {
    function renderChart(data) {
        const tests = data.results[0].suites[0].tests;
        const labels = tests.map(test => test.title);
        const passes = tests.map(test => (test.state === "passed" ? 1 : 0));
        const failures = tests.map(test => (test.state === "failed" ? 1 : 0));

        const ctx = document.getElementById("testResultsChart").getContext("2d");

        new Chart(ctx, {
            type: "bar",
            data: {
                labels,
                datasets: [
                    {
                        label: "Passed",
                        data: passes,
                        backgroundColor: "rgba(39, 174, 96, 0.75)",
                        borderColor: "rgba(39, 174, 96, 1)",
                        borderWidth: 2,
                    },
                    {
                        label: "Failed",
                        data: failures,
                        backgroundColor: "rgba(192, 57, 43, 0.75)",
                        borderColor: "rgba(192, 57, 43, 1)",
                        borderWidth: 2,
                    },
                ],
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1,
                        },
                        grid: {
                            borderDash: [5, 5],
                        },
                    },
                    x: {
                        ticks: {
                            autoSkip: false,
                            maxRotation: 30,
                            minRotation: 15,
                        },
                    },
                },
                plugins: {
                    legend: {
                        position: "top",
                        labels: {
                            font: {
                                size: 14,
                                weight: "bold",
                            },
                        },
                    },
                    tooltip: {
                        backgroundColor: "#2c3e50",
                        titleColor: "#ecf0f1",
                        bodyColor: "#ecf0f1",
                        borderWidth: 1,
                        borderColor: "#fff",
                    },
                },
            },
        });
    }

    fetch("https://raw.githubusercontent.com/JustinWilkins/Website/main/src/html-report/mochawesome.json")
        .then((response) => {
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return response.json();
        })
        .then(renderChart)
        .catch((error) => console.error("Error loading JSON:", error));
});