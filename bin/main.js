#!/usr/bin/env node

const actions = require('./actions'),
			commands = require('./commands'),
			directoryUtilities = require('./utilities/directory'),
			configurationUtilities = require('./utilities/configuration');

const { PUBLISH_COMMAND } = commands,
			{ changeDirectory } = directoryUtilities,
      { checkConfigurationFileExists, createVacuousConfigurationFile } = configurationUtilities;

function main(command, argument, options) {
  let configurationFileExists = checkConfigurationFileExists();

  if (!configurationFileExists) {
    const commandPublishCommand = (command === PUBLISH_COMMAND);

    if (commandPublishCommand) {
      const releaseName = changeDirectory();

      if (releaseName !== null) {
        argument = releaseName; ///

        configurationFileExists = true;
      }
    }
  }

  if (!configurationFileExists) {
    createVacuousConfigurationFile();
  }

  actions(command, argument, options);
}

module.exports = main;
