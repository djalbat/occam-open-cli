#!/usr/bin/env node

const actions = require('./actions'),
      messages = require('./messages'),
			commands = require('./commands'),
      configuration = require('./configuration'),
			directoryUtilities = require('./utilities/directory');

const { exit } = process,
			{ changeDirectory } = directoryUtilities,
      { FAILED_PUBLISH_NO_CONFIGURATION_FILE_MESSAGE } = messages,
      { HELP_COMMAND, VERSION_COMMAND, PUBLISH_COMMAND } = commands,
      { checkConfigurationFileExists, upgradeConfigurationFile, createConfigurationFile } = configuration;

function main(command, argument, options) {
  let configurationFileExists = checkConfigurationFileExists();

  if (configurationFileExists) {
    upgradeConfigurationFile();
  } else {
    if (command === PUBLISH_COMMAND) {
      const releaseName = changeDirectory();

      if (releaseName !== null) {
        argument = releaseName; ///

        upgradeConfigurationFile();
      } else {
        console.log(FAILED_PUBLISH_NO_CONFIGURATION_FILE_MESSAGE);

        exit();
      }
    } else {
      createConfigurationFile();
    }
  }

  actions(command, argument, options);
}

module.exports = main;
