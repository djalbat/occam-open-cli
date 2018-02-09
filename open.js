#!/usr/bin/env node

const minimist = require('minimist'),
      necessary = require('necessary');

const main = require('./bin/main');

const { arrayUtilities } = necessary,
      { third, fourth } = arrayUtilities;

const { argv } = process,
      options = optionsFromArgv(argv),
      parameters = parametersFromArgv(argv),
      thirdParameter = third(parameters),
      fourthParameter = fourth(parameters),
      command = thirdParameter || null,
      argument = fourthParameter || null;

main(command, argument, options);

function optionsFromArgv(argv) {
  argv = minimist(argv);  ///

  const keys = Object.keys(argv),
        options = keys.reduce(function(options, key) {
          let option = null;

          switch (key) {
            case 'h' :
            case 'help' :
              option = 'help';
              break;

            case 'v' :
            case 'version' :
              option = 'version';
              break;
          }

          if (option !== null) {
            options.push(option);
          }

          return options;
        }, []);

  return options;
}

function parametersFromArgv(argv) {
  argv = minimist(argv);  ///

  const { _ } = argv, ///
        parameters = _;   ///

  return parameters;
}