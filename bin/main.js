'use strict';

const necessary = require('necessary');

const actions = require('./actions'),
      commands = require('./commands'),
      configuration = require('./configuration');

const { cwd, chdir } = process,
      { pathUtilities } = necessary,
      { PUBLISH_COMMAND } = commands,
      { bottommostNameFromPath } = pathUtilities,
      { checkConfigurationFileExists, upgradeConfigurationFile } = configuration;

function main(command, argument, options) {
  let configurationFileExists = checkConfigurationFileExists();

  if (command === PUBLISH_COMMAND) {
    if (!configurationFileExists) {
      const currentWorkingDirectoryPath = cwd(); ///

      chdir('..');

      const oldCurrentWorkingDirectoryPath = currentWorkingDirectoryPath; ///

      configurationFileExists = checkConfigurationFileExists();

      if (configurationFileExists) {
        const bottommostOldCurrentWorkingDirectoryName = bottommostNameFromPath(oldCurrentWorkingDirectoryPath);

        argument = bottommostOldCurrentWorkingDirectoryName; ///
      }
    }
  }

  if (configurationFileExists) {
    upgradeConfigurationFile();
  }

  actions(command, argument, options);
}

module.exports = main;
