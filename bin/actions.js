"use strict";

const help = require("./action/help"),
      open = require("./action/open"),
      clone = require("./action/clone"),
      signIn = require("./action/signIn"),
      signOut = require("./action/signOut"),
      version = require("./action/version"),
      publish = require("./action/publish"),
      deprecate = require("./action/deprecate"),
      initialise = require("./action/initialise"),
      setOptions = require("./action/setOptions"),
      createAccount = require("./action/createAccount"),
      resetPassword = require("./action/resetPassword");

const { HELP_OPTION, VERSION_OPTION } = require("./options"),
      { HELP_COMMAND,
        CLONE_COMMAND,
        VERSION_COMMAND,
        INSTALL_COMMAND,
        PUBLISH_COMMAND,
        SIGN_IN_COMMAND,
        SIGN_OUT_COMMAND,
        DEPRECATE_COMMAND,
        INITIALISE_COMMAND,
        SET_OPTIONS_COMMAND,
        CREATE_ACCOUNT_COMMAND,
        RESET_PASSWORD_COMMAND } = require("./commands");

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
    case VERSION_COMMAND : version(); break;
    case INSTALL_COMMAND : open(argument); break;
    case PUBLISH_COMMAND : publish(argument); break;
    case SIGN_IN_COMMAND : signIn(argument); break;
    case SIGN_OUT_COMMAND : signOut(); break;
    case DEPRECATE_COMMAND : deprecate(argument); break;
    case INITIALISE_COMMAND : initialise(); break;
    case SET_OPTIONS_COMMAND : setOptions(); break;
    case CREATE_ACCOUNT_COMMAND : createAccount(argument); break;
    case RESET_PASSWORD_COMMAND : resetPassword(argument); break;

    default :
      argument = command;  ///

      open(argument);

      break;
  }
}

module.exports = actions;
