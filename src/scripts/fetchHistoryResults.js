document.addEventListener("DOMContentLoaded", function () {
    function renderHistoryChart(history) {
        const maxRuns = 10;
        const runs = history.slice(0, maxRuns).reverse();

        const labels = runs.map(run => new Date(run.runId).toLocaleString());

        const passes = runs.map(run => run.passed);
        const failures = runs.map(run => run.failed);

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
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    tooltip: {
                        backgroundColor: "#2c3e50",
                        titleColor: "#ecf0f1",
                        bodyColor: "#ecf0f1",
                        borderWidth: 1,
                        borderColor: "#fff",
                        callbacks: {
                            label: function (context) {
                                return `${context.dataset.label}: ${context.raw}`;
                            }
                        }
                    },
                    legend: {
                        position: "top",
                        labels: { font: { size: 14, weight: "bold" } }
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        ticks: { autoSkip: false, maxRotation: 30, minRotation: 15 }
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        ticks: { stepSize: 1 },
                        grid: { borderDash: [5, 5] }
                    }
                }
            }
        });
    }

    fetch("https://raw.githubusercontent.com/JustinWilkins/Website/main/src/html-report/history.json")
        .then(res => res.json())
        .then(renderHistoryChart)
        .catch(err => console.error("Error loading history JSON:", err));
});