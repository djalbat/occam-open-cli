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

  switch (command) {
    case 'help': help(); break;
    case 'version': version(); break;
    case 'install': install(argument); break;
    case 'remove': remove(argument); break;
    case 'register': register(argument); break;
    case 'login': login(argument); break;
    case 'logout': logout(); break;
    case 'change-password': changePassword(argument); break;
    case 'recover-password': recoverPassword(argument); break;
    case 'confirm': confirmEmailAddress(argument); break; ///

    default:
      argument = command;  ///

      install(argument);
      break;
  }
}

module.exports = main;
