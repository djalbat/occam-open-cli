#!/usr/bin/env node

const main = require('./bin/main'),
			commands = require('./bin/commands'),
			argvUtilities = require('./bin/utilities/argv'),
			directoryUtilities = require('./bin/utilities/directory'),
			configurationUtilities = require('./bin/utilities/configuration');

const { argv } = process,
			{ PUBLISH_COMMAND } = commands,
			{ changeDirectory } = directoryUtilities,
			{ optionsFromArgv, commandFromArgv, argumentFromArgv } = argvUtilities,
      { checkConfigurationFileExists, createVacuousConfigurationFile } = configurationUtilities;

const command = commandFromArgv(argv),
      options = optionsFromArgv(argv);

let argument = argumentFromArgv(argv),
    configurationFileExists = checkConfigurationFileExists();

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

main(command, argument, options);
