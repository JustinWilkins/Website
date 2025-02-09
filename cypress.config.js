const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "results",
      overwrite: true,
      html: false,
      json: true,
    },
    baseUrl: 'https://justin-wilkins.netlify.app',
    supportFile: false,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      on('after:run', (results) => {
        try {
          const fs = require('fs');
          fs.writeFileSync('results/test-results.json', JSON.stringify(results, null, 2));
        } catch (error) {
          console.error('Error writing results:', error);
        }
      });
    },
    video: false,
    screenshotOnRunFailure: true,
    viewportWidth: 1280,
    viewportHeight: 720
  },
});