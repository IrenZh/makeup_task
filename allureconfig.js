const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = {
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'spec,xunit,allure',
    allure: {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: true,
    },
    xunit: {
      output: 'test-results/results-[hash].xml',
    },
  },

  on: (config, webpack) => {
    allureWriter(on, config)
  },
}

