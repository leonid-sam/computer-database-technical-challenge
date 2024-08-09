const {defineConfig} = require("cypress");

module.exports = defineConfig({
  "watchForFileChanges": false,
  e2e: {
    baseUrl: 'https://computer-database.gatling.io',
    browser: 'chrome',
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}'
  },
});
