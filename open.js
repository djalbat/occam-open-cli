#!/usr/bin/env node

const necessary = require('necessary');

const main = require('./bin/main');

const { arrayUtilities, miscellaneousUtilities } = necessary,
      { first, second, filter } = arrayUtilities,
      { rc } = miscellaneousUtilities,
      { setRCBaseExtension } = rc,
      { argv } = process;

setRCBaseExtension('open');

rc();

const options = optionsFromArgv(argv, [
        'help',
        'version'
      ]),
      command = argv.shift() || null,
      argument = argv.shift() || null;

main(command, argument, options);

function optionsFromArgv(argv, availableOptions) {
  argv.shift();
  argv.shift();

  const optionsMap = {};

  filter(argv, function(argument) { ///
    const discardArgument = longhandOptionFromArgument(argument, availableOptions, optionsMap) ||
                            shorthandOptionsFromArgument(argument, availableOptions, optionsMap);

    const keepArgument = !discardArgument;

    return keepArgument;
  });

  const options = Object.keys(optionsMap);

  return options;
}

function longhandOptionFromArgument(argument, availableOptions, optionsMap) {
  let discardArgument = false;

  const matches = argument.match(/^\-\-([^-].+)$/);

  if (matches !== null) {
    const secondMatch = second(matches),
          availableOptionsIncludesSecondMatch = availableOptions.includes(secondMatch);

    if (availableOptionsIncludesSecondMatch) {
      const longhandOption = secondMatch, ///
            option = longhandOption;  ///

      optionsMap[option] = option;
    }

    discardArgument = true;
  }

  return discardArgument;
}

function shorthandOptionsFromArgument(argument, availableOptions, optionsMap) {
  let discardArgument = false;

  const matches = argument.match(/^\-([^-].*)$/);

  if (matches !== null) {
    const secondMatch = second(matches),
          availableShortHandOptions = availableOptions.map(function(availableOption) {
            const availableOptionCharacters = availableOption.split(''),
                  firstAvailableOptionCharacter = first(availableOptionCharacters),
                  availableShorthandOption = firstAvailableOptionCharacter; ///

            return availableShorthandOption;
          }),
          availableShortHandOptionsIncludesSecondMatch = availableShortHandOptions.includes(secondMatch);

    if (availableShortHandOptionsIncludesSecondMatch) {
      const availableShorthandOption = secondMatch, ///
            availableShorthandOptionIndex = availableShortHandOptions.indexOf(availableShorthandOption),
            availableOptionIndex = availableShorthandOptionIndex, ///
            availableOption = availableOptions[availableOptionIndex],
            option = availableOption; ///

      optionsMap[option] = option;
    }

    discardArgument = true;
  }

  return discardArgument;
}