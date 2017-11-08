'use strict';

const help = require('./action/help'),
      install = require('./action/install');

function main(command, options) {
  const optionsIncludesHelp = options.includes('h') || options.includes('help');

  if (optionsIncludesHelp) {
    help();
  } else {
    switch (command) {
      case 'install': 
        install();
        break;
    }
  }
}

module.exports = main;
