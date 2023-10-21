const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotOnRunFailure: true,
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://demo.guru99.com/insurance/v1/index.php" //baseUrl for webapp
  },
});
