'use strict';

const necessary = require('necessary');

const help = require('./action/help'),
      version = require('./action/version'),
      install = require('./action/install'),
      register = require('./action/register');

const { arrayUtilities } = necessary,
       { first } = arrayUtilities;

function main(options, command, args) {
  const commandMissing = (command === null),
        optionsIncludesHelp = options.includes('h') || options.includes('help'),
        optionsIncludesVersion = options.includes('v') || options.includes('version');

  if (false) {

  } else if (commandMissing || optionsIncludesHelp) {
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

      case 'register': {
        const firstArg = first(args),
              username = firstArg || null; ///

        register(username);
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
