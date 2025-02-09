document.addEventListener("DOMContentLoaded", function () {
    function renderChart(data) {
        // Extract test titles and states
        const labels = data.results[0].suites[0].tests.map(test => test.title);
        const passes = data.results[0].suites[0].tests.map(test => test.state === 'passed' ? 1 : 0);
        const failures = data.results[0].suites[0].tests.map(test => test.state === 'failed' ? 1 : 0);

        const ctx = document.getElementById('testResultsChart').getContext('2d');


        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Passed',
                    data: passes,
                    backgroundColor: 'rgba(46, 204, 113, 0.7)',
                    borderColor: 'rgba(46, 204, 113, 1)',
                    borderWidth: 1
                }, {
                    label: 'Failed',
                    data: failures,
                    backgroundColor: 'rgba(231, 76, 60, 0.7)',
                    borderColor: 'rgba(231, 76, 60, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                size: 14
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: '#34495e',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                    }
                }
            }
        });
    }

    // Fetch the JSON file from the GitHub repository
    fetch('https://raw.githubusercontent.com/JustinWilkins/Website/main/src/html-report/mochawesome.json')
        .then(response => response.json())
        .then(data => renderChart(data))
        .catch(error => console.error('Error loading JSON:', error));
});