const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "src/html-report",
      overwrite: true,
      html: false,
      json: true,
    },
    baseUrl: 'https://justin-wilkins.netlify.app',
    supportFile: false,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
    },
    video: true,
    screenshotOnRunFailure: false,
    viewportWidth: 1920,
    viewportHeight: 1080
  },
});