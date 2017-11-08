'use strict';

const help = require('./action/help'),
      version = require('./action/version'),
      install = require('./action/install');

function main(command, options) {
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

    case 'install': 
      install();
      break;
  }
}

module.exports = main;
