#!/usr/bin/env node

const necessary = require('necessary');

const main = require('./bin/main'),
			commands = require('./bin/commands'),
			argvUtilities = require('./bin/utilities/argv'),
			directoryUtilities = require('./bin/utilities/directory'),
			configurationUtilities = require('./bin/utilities/configuration');

const { miscellaneousUtilities } = necessary,
			{ rc } = miscellaneousUtilities,
			{ argv } = process,
			{ PUBLISH_COMMAND } = commands,
			{ setRCBaseExtension, checkRCFileExists, createVacuousRCFile } = rc,
			{ changeDirectory } = directoryUtilities,
			{ setDefaultOptions } = configurationUtilities,
			{ optionsFromArgv, commandFromArgv, argumentFromArgv } = argvUtilities;

setRCBaseExtension('open');

const options = optionsFromArgv(argv),
      command = commandFromArgv(argv),
      argument = argumentFromArgv(argv);

let rcFileExists = checkRCFileExists();

if (!rcFileExists) {
	const commandPublishCommand = (command === PUBLISH_COMMAND);

	if (commandPublishCommand) {
		const releaseName = changeDirectory();

		if (releaseName !== null) {
			setReleaseName(releaseName);

			rcFileExists = true;
		}
	}
}

if (!rcFileExists) {
	createVacuousRCFile();

	setDefaultOptions();
}

main(command, argument, options);
