#!/usr/bin/env node

const main = require('./bin/main'),
			argvUtilities = require('./bin/utilities/argv');

const { argv } = process,
			{ commandFromArgv, argumentFromArgv, optionsFromArgv } = argvUtilities;

const command = commandFromArgv(argv),
      argument = argumentFromArgv(argv),
      options = optionsFromArgv(argv);

main(command, argument, options);
