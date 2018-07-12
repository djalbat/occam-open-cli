'use strict';

const necessary = require('necessary');

const { arrayUtilities } = necessary,
      { first, second, third, fourth, filter } = arrayUtilities;

function optionsFromArgv(argv) {
  argv = argv.slice();  ///

  argv.shift();
  argv.shift();

  const optionsMap = {},
        availableOptions = [
        'help',
            'version'
        ];

  filter(argv, function(argument) { ///
    const discardArgument = longhandOptionFromArgument(argument, availableOptions, optionsMap) ||
                            shorthandOptionsFromArgument(argument, availableOptions, optionsMap);

    const keepArgument = !discardArgument;

    return keepArgument;
  });

  const options = Object.keys(optionsMap);

  return options;
}

function commandFromArgv(argv) {
  const thirdArgument = third(argv),  ///
        command = thirdArgument || null;  ///

  return command;
}

function argumentFromArgv(argv) {
  const fourthArgument = fourth(argv),  ///
        argument = fourthArgument || null;  ///

  return argument;
}

module.exports = {
  optionsFromArgv,
  commandFromArgv,
  argumentFromArgv
};

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
