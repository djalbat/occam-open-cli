"use strict";

const help = require("./action/help"),
      clone = require("./action/clone"),
      login = require("./action/login"),
      logout = require("./action/logout"),
      remove = require("./action/remove"),
      version = require("./action/version"),
      install = require("./action/install"),
      publish = require("./action/publish"),
      register = require("./action/register"),
      deprecate = require("./action/deprecate"),
      initialise = require("./action/initialise"),
      setOptions = require("./action/setOptions"),
      resetPassword = require("./action/resetPassword"),
      changePassword = require("./action/changePassword"),
      changeEmailAddress = require("./action/changeEmailAddress"),
      confirmEmailAddress = require("./action/confirmEmailAddress"),
      resendConfirmationCode = require("./action/resendConfirmationCode");

const { HELP_OPTION, VERSION_OPTION } = require("./options"),
      { HELP_COMMAND,
        CLONE_COMMAND,
        LOGIN_COMMAND,
        LOGOUT_COMMAND,
        REMOVE_COMMAND,
        VERSION_COMMAND,
        INSTALL_COMMAND,
        PUBLISH_COMMAND,
        REGISTER_COMMAND,
        DEPRECATE_COMMAND,
        INITIALISE_COMMAND,
        SET_OPTIONS_COMMAND,
        RESET_PASSWORD_COMMAND,
        CHANGE_PASSWORD_COMMAND,
        CHANGE_EMAIL_ADDRESS_COMMAND,
        CONFIRM_EMAIL_ADDRESS_COMMAND,
        RESEND_CONFIRMATION_CODE_COMMAND } = require("./commands");

function actions(command, argument, options) {
  const commandMissing = (command === null),
        helpOptionPresent = options.hasOwnProperty(HELP_OPTION),
        versionOptionPresent = options.hasOwnProperty(VERSION_OPTION);

  if (false) {
    ///
  } else if (versionOptionPresent) {
    command = VERSION_COMMAND;
  } else if (commandMissing || helpOptionPresent) {
    command = HELP_COMMAND;
  }

  switch (command) {
    case HELP_COMMAND : help(); break;
    case CLONE_COMMAND : clone(argument); break;
    case LOGIN_COMMAND : login(argument); break;
    case LOGOUT_COMMAND : logout(); break;
    case REMOVE_COMMAND : remove(argument); break;
    case VERSION_COMMAND : version(); break;
    case INSTALL_COMMAND : install(argument); break;
    case PUBLISH_COMMAND : publish(argument); break;
    case REGISTER_COMMAND : register(argument); break;
    case DEPRECATE_COMMAND : deprecate(argument); break;
    case INITIALISE_COMMAND : initialise(); break;
    case SET_OPTIONS_COMMAND : setOptions(); break;
    case RESET_PASSWORD_COMMAND : resetPassword(argument); break;
    case CHANGE_PASSWORD_COMMAND : changePassword(argument); break;
    case CHANGE_EMAIL_ADDRESS_COMMAND : changeEmailAddress(argument); break;
    case CONFIRM_EMAIL_ADDRESS_COMMAND : confirmEmailAddress(argument); break;
    case RESEND_CONFIRMATION_CODE_COMMAND : resendConfirmationCode(argument); break;

    default :
      argument = command;  ///

      install(argument);

      break;
  }
}

module.exports = actions;
