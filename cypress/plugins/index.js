const injectDevServer = require('@cypress/react/plugins/react-scripts');

/// <reference types="cypress" />
const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");
const useBrowserifyIstanbul = require("@cypress/code-coverage/use-browserify-istanbul");

module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config);
  const options = {
    ...browserify.defaultOptions,
    typescript: require.resolve("typescript")
  };
  on('file:preprocessor', file => {
    console.log("cypress-test-files --->", file.filePath);
    return file.filePath.includes('.feature')
        ? cucumber(options)(file)
        : useBrowserifyIstanbul(file)
  });

  if (config.testingType === "component") {
    return injectDevServer(on, {...config, addTranspiledFolders: [".storybook"]});
  }

  return config; // IMPORTANT to return a config
};