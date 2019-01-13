#!/usr/bin/env node

const actions = require('./actions'),
      messages = require('./messages'),
			commands = require('./commands'),
      configuration = require('./configuration'),
			directoryUtilities = require('./utilities/directory');

const { exit } = process,
      { PUBLISH_COMMAND } = commands,
			{ changeDirectory } = directoryUtilities,
      { FAILED_PUBLISH_NO_CONFIGURATION_FILE_MESSAGE } = messages,
      { checkConfigurationFileExists, upgradeConfigurationFile, createConfigurationFile } = configuration;

function main(command, argument, options) {
  let configurationFileExists = checkConfigurationFileExists();

  if (configurationFileExists) {
    upgradeConfigurationFile();
  } else {
    const commandPublishCommand = (command === PUBLISH_COMMAND);

    if (commandPublishCommand) {
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
