document.addEventListener("DOMContentLoaded", function () {
    async function fetchTestResults() {
        try {
            const response = await fetch('/path-to-your-json-file.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            new Chart(document.getElementById('testResultsChart'), {
                type: 'bar',
                data: {
                    labels: ['Passed', 'Failed'],
                    datasets: [{
                        label: 'Test Results',
                        data: [data.passed, data.failed],
                        backgroundColor: ['#4CAF50', '#FF5252']
                    }]
                }
            });
        } catch (error) {
            console.error('There was a problem fetching the test results:', error);
        }
    }
    fetchTestResults();
});