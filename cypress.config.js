const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'yhb36k',
  chromeWebSecurity: false,
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
