#!/usr/bin/env node

require('./bin/configuration'); ///

const main = require('./bin/main'),
      parameters = require('./bin/parameters');

const { optionsFromArgv, commandFromArgv, argumentFromArgv } = parameters,
      { argv } = process;

const options = optionsFromArgv(argv),
      command = commandFromArgv(argv),
      argument = argumentFromArgv(argv),
      dirname = __dirname;  ///

main(command, argument, options, dirname);
