'use strict';

const necessary = require('necessary');

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

const { arrayUtilities } = necessary,
      { first } = arrayUtilities;

function main(options, command, args) {
  const commandMissing = (command === null),
        optionsIncludesHelp = options.includes('h') || options.includes('help'),
        optionsIncludesVersion = options.includes('v') || options.includes('version');

  if (false) {

  } else if (optionsIncludesVersion) {
    command = 'version';
  } else if (commandMissing || optionsIncludesHelp) {
    command = 'help';
  }

  const firstArg = first(args) || null;

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
      packageName = firstArg; ///

      install(packageName);
      break;

    case 'remove':
      packageName = firstArg; ///

      remove(packageName);
      break;

    case 'register':
      username = firstArg; ///

      register(username);
      break;

    case 'confirm': ///
      emailAddress = firstArg; ///

      confirmEmailAddress(emailAddress);
      break;

    case 'login':
      username = firstArg; ///

      login(username);
      break;

    case 'logout':
      logout();
      break;

    case 'change-password':
      username = firstArg; ///

      changePassword(username);
      break;

    case 'recover-password':
      username = firstArg; ///

      recoverPassword(username);
      break;

    default:
      packageName = command;  ///

      install(packageName);
      break;
  }
}

module.exports = main;
