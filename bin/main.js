'use strict';

const help = require('./action/help'),
      clone = require('./action/clone'),
      login = require('./action/login'),
      logout = require('./action/logout'),
      remove = require('./action/remove'),
      version = require('./action/version'),
      install = require('./action/install'),
      publish = require('./action/publish'),
      register = require('./action/register'),
      resetPassword = require('./action/resetPassword'),
      changePassword = require('./action/changePassword'),
      confirmEmailAddress = require('./action/confirmEmailAddress'),
      resendConfirmationCode = require('./action/resendConfirmationCode');

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
    case 'clone': clone(argument); break;
    case 'publish': publish(argument); break;
    case 'register': register(argument); break;
    case 'login': login(argument); break;
    case 'logout': logout(); break;
    case 'resend': resendConfirmationCode(argument); break; ///
    case 'confirm': confirmEmailAddress(argument); break; ///
    case 'reset-password': resetPassword(argument); break;
    case 'change-password': changePassword(argument); break;

    default:
      argument = command;  ///

      install(argument);
      break;
  }
}

module.exports = main;
