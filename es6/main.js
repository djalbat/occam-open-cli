'use strict';

const help = require('./action/help'),
      login = require('./action/login'),
      logout = require('./action/logout'),
      remove = require('./action/remove'),
      version = require('./action/version'),
      install = require('./action/install'),
      register = require('./action/register'),
      changePassword = require('./action/changePassword'),
      recoverPassword = require('./action/recoverPassword'),
      confirmEmailAddress = require('./action/confirmEmailAddress');

function main(command, argument, options) {
  const commandMissing = (command === null),
        optionsIncludesHelp = options.includes('help'),
        optionsIncludesVersion = options.includes('version');

  if (false) {

  } else if (optionsIncludesVersion) {
    command = 'version';
  } else if (commandMissing || optionsIncludesHelp) {
    command = 'help';
  }

  let packageName,
      username,
      emailAddress;
  
  switch (command) {
    case 'help':
      help();
      break;

    case 'version':
      version();
      break;

    case 'install':
      packageName = argument; ///

      install(packageName);
      break;

    case 'remove':
      packageName = argument; ///

      remove(packageName);
      break;

    case 'register':
      username = argument; ///

      register(username);
      break;

    case 'confirm': ///
      emailAddress = argument; ///

      confirmEmailAddress(emailAddress);
      break;

    case 'login':
      username = argument; ///

      login(username);
      break;

    case 'logout':
      logout();
      break;

    case 'change-password':
      username = argument; ///

      changePassword(username);
      break;

    case 'recover-password':
      username = argument; ///

      recoverPassword(username);
      break;

    default:
      packageName = command;  ///

      install(packageName);
      break;
  }
}

module.exports = main;
