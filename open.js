#!/usr/bin/env node

const minimist = require('minimist'),
      necessary = require('necessary');

const main = require('./es6/main');

const { arrayUtilities } = necessary,
      { third } = arrayUtilities;

const argv = minimist(process.argv),
      { _ } = argv,
      parameters = _,   ///
      thirdParameter = third(parameters),
      options = optionsFromArgv(argv),
      command = thirdParameter || null, ///
      args = parameters.slice(3); ///

main(options, command, args);

function optionsFromArgv(argv) {
  const keys = Object.keys(argv),
        options = keys.reduce(function(options, key) {
          if (key !== '_') {
            const option = key; ///

            options.push(option);
          }

          return options;
        }, []);

  return options;
}
