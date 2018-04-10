'use strict';

const commands = require('./commands'),
      help = require('./action/help'),
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

const {
  HELP_COMMAND,
  VERSION_COMMAND,
  INSTALL_COMMAND,
  REMOVE_COMMAND,
  CLONE_COMMAND,
  PUBLISH_COMMAND,
  REGISTER_COMMAND,
  LOGIN_COMMAND,
  LOGOUT_COMMAND,
  RESEND_COMMAND,
  RESET_PASSWORD_COMMAND,
  CHANGE_PASSWORD_COMMAND,
  CONFIRM_EMAIL_ADDRESS_COMMAND
} = commands;

function main(command, argument, options, dirname) {
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
    case HELP_COMMAND: help(); break;
    case VERSION_COMMAND: version(dirname); break;
    case INSTALL_COMMAND: install(argument); break;
    case REMOVE_COMMAND: remove(argument); break;
    case CLONE_COMMAND: clone(argument); break;
    case PUBLISH_COMMAND: publish(argument); break;
    case REGISTER_COMMAND: register(argument); break;
    case LOGIN_COMMAND: login(argument); break;
    case LOGOUT_COMMAND: logout(); break;
    case RESEND_COMMAND: resendConfirmationCode(argument); break; ///
    case RESET_PASSWORD_COMMAND: resetPassword(argument); break;
    case CHANGE_PASSWORD_COMMAND: changePassword(argument); break;
    case CONFIRM_EMAIL_ADDRESS_COMMAND: confirmEmailAddress(argument); break; ///

    default:
      argument = command;  ///

      install(argument);
      break;
  }
}

module.exports = main;
