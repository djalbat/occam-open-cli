#!/usr/bin/env node

const minimist = require('minimist'),
      necessary = require('necessary');

const main = require('./es6/bin/main');

const { arrayUtilities } = necessary,
      { third } = arrayUtilities;

const args = minimist(process.argv),
      { _ } = args,
      parameters = _,   ///
      thirdParameter = third(parameters),
      command = thirdParameter, ///
      options = optionsFromArgs(args);

main(command, options);

function optionsFromArgs(args) {
  const keys = Object.keys(args),
        options = keys.reduce(function(options, key) {
          if (key !== '_') {
            const option = key; ///

            options.push(option);
          }

          return options;
        }, []);

  return options;
};