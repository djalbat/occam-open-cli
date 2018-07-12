#!/usr/bin/env node

require('./bin/configuration'); ///

const main = require('./bin/main'),
      parameterUtilities = require('./bin/utilities/parameter');

const { argv } = process,
			{ optionsFromArgv, commandFromArgv, argumentFromArgv } = parameterUtilities;

const options = optionsFromArgv(argv),
      command = commandFromArgv(argv),
      argument = argumentFromArgv(argv),
      dirname = __dirname;  ///

main(command, argument, options, dirname);
