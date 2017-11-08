'use strict';

const necessary = require('necessary');

const help = require('./action/help'),
      version = require('./action/version'),
      install = require('./action/install');

 const { arrayUtilities } = necessary,
       { first } = arrayUtilities;

function main(options, command, args) {
  const optionsIncludesHelp = options.includes('h') || options.includes('help'),
        optionsIncludesVersion = options.includes('v') || options.includes('version');

  if (false) {

  } else if (optionsIncludesHelp) {
    command = 'help';
  } else if (optionsIncludesVersion) {
    command = 'version';
  }
  
  switch (command) {
    case 'help': 
      help();
      break;

    case 'version': 
      version();
      break;

    case 'install': {
        const firstArg = first(args),
              packageName = firstArg; ///

        install(packageName);
      }
      break;

    default: {
        const packageName = command;  ///
      
        install(packageName)
      }
      break;
  }
}

module.exports = main;
