const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://makeup.com.ua/ua/'
  },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 1000,
    viewportWidth: 2000,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000
  })


