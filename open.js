#!/usr/bin/env node

const necessary = require('necessary');

const main = require('./bin/main'),
			commands = require('./bin/commands'),
      constants = require('./bin/constants'),
			argvUtilities = require('./bin/utilities/argv'),
			directoryUtilities = require('./bin/utilities/directory'),
			configurationUtilities = require('./bin/utilities/configuration');

const { miscellaneousUtilities } = necessary,
			{ rc } = miscellaneousUtilities,
			{ argv } = process,
			{ PUBLISH_COMMAND } = commands,
      { RC_BASE_EXTENSION } = constants,
			{ changeDirectory } = directoryUtilities,
			{ setDefaultOptions } = configurationUtilities,
			{ optionsFromArgv, commandFromArgv, argumentFromArgv } = argvUtilities,
      { setRCBaseExtension, checkRCFileExists, createVacuousRCFile } = rc;

setRCBaseExtension(RC_BASE_EXTENSION);

const command = commandFromArgv(argv),
      options = optionsFromArgv(argv);

let argument = argumentFromArgv(argv),
    rcFileExists = checkRCFileExists();

if (!rcFileExists) {
	const commandPublishCommand = (command === PUBLISH_COMMAND);

	if (commandPublishCommand) {
		const releaseName = changeDirectory();

		if (releaseName !== null) {
      argument = releaseName; ///

			rcFileExists = true;
		}
	}
}

if (!rcFileExists) {
	createVacuousRCFile();

	setDefaultOptions();
}

main(command, argument, options);
