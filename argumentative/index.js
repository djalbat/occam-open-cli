'use strict';

function parseArgv(argv, abbreviations) {
  const interpreterPath = argv[0],
        filePath = argv[1],
        args = argv.slice(2),  ///
        commands = [],
        optionMap = {},
        optionAbbreviationMap = abbreviations || {};

	args.forEach((argument) => {  ///
		const abbreviatedOptions = /^-[^-]+$/.test(argument),
          unabbreviatedOption = /^--[^-]+$/.test(argument);

		if (false) {
		  ///
    } else if (abbreviatedOptions) {
      const index = argument.indexOf('=');

      if (index === -1) {
        const optionNames = argument.split('');

        optionNames.shift();

        optionNames.forEach((optionName) => {
          const optionValue = true;

          optionMap[optionName] = optionValue;
        })
      } else {
        const optionNames = argument.substring(1, index).split(''),
              optionNamesLength = optionNames.length,
              lastOptionIndex = optionNamesLength - 1,
              lastOptionValue = argument.substring(index + 1);

        optionNames.forEach((optionName, index) => {
          const optionValue = (index === lastOptionIndex) ?
                                lastOptionValue :
                                  true;

          optionMap[optionName] = optionValue;
        });
      }
    } else if (unabbreviatedOption) {
		  let optionName, optionValue;

		  const index = argument.indexOf('=');

		  if (index === -1) {
		    optionName = argument.substring(2);

        optionValue = true;
      } else {
		    optionName = argument.substring(2, index);

		    optionValue =  argument.substring(index + 1);
      }

      optionMap[optionName] = optionValue;
    } else {
		  const command = argument; ///

      commands.push(command);
    }
	});

	const abbreviatedOptionNames = Object.keys(optionAbbreviationMap);  ///

  abbreviatedOptionNames.forEach((abbreviatedOptionName) => {
    if (optionMap.hasOwnProperty(abbreviatedOptionName)) {
      const unAbbreviatedOptionName = optionAbbreviationMap[abbreviatedOptionName];

      optionMap[unAbbreviatedOptionName] = optionMap[abbreviatedOptionName];

      delete optionMap[abbreviatedOptionName];
    }
  });

	const options = optionMap; ///

	return ({
		args,
    options,
		commands,
		filePath,
		interpreterPath
	});
}

module.exports = {
  parseArgv
};
