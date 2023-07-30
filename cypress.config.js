const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "$schema": "https://raw.githubusercontent.com/cypress-io/cypress/develop/cli/schema/cypress.schema.json",
    "baseUrl": "https://www.demoblaze.com",
    "chromeWebSecurity": false,
    "modifyObstructiveCode": false,
    "defaultCommandTimeout": 20000
  },
});
