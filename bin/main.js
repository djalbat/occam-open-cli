#!/usr/bin/env node

const actions = require('./actions'),
			commands = require('./commands'),
      configuration = require('./configuration'),
			directoryUtilities = require('./utilities/directory');

const { PUBLISH_COMMAND } = commands,
			{ changeDirectory } = directoryUtilities,
      { checkConfigurationFileExists, createVacuousConfigurationFile } = configuration;

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
