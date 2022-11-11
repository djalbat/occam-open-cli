"use strict";

const helpAction = require("./action/help"),
      openAction = require("./action/open"),
      cloneAction = require("./action/clone"),
      signInAction = require("./action/signIn"),
      signOutAction = require("./action/signOut"),
      versionAction = require("./action/version"),
      publishAction = require("./action/publish"),
      deprecateAction = require("./action/deprecate"),
      initialiseAction = require("./action/initialise"),
      setOptionsAction = require("./action/setOptions"),
      createAccountAction = require("./action/createAccount"),
      resetPasswordAction = require("./action/resetPassword");

const { DEFAULT_HELP, DEFAULT_DRY_RUN, DEFAULT_VERSION, DEFAULT_QUIETLY, DEFAULT_LOG_LEVEL } = require("./defaults"),
      { HELP_COMMAND,
        OPEN_COMMAND,
        CLONE_COMMAND,
        VERSION_COMMAND,
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
        { help = DEFAULT_HELP,
          dryRun = DEFAULT_DRY_RUN,
          version = DEFAULT_VERSION,
          quietly = DEFAULT_QUIETLY,
          logLevel = DEFAULT_LOG_LEVEL } = options;

  if (false) {
    ///
  } else if (help) {
    command = HELP_COMMAND;
  } else if (version) {
    command = VERSION_COMMAND;
  } else if (commandMissing) {
    command = HELP_COMMAND;
  }

  switch (command) {
    case HELP_COMMAND : helpAction(); break;
    case OPEN_COMMAND : openAction(argument, quietly); break;
    case CLONE_COMMAND : cloneAction(argument, quietly); break;
    case VERSION_COMMAND : versionAction(); break;
    case PUBLISH_COMMAND : publishAction(argument, dryRun, logLevel); break;
    case SIGN_IN_COMMAND : signInAction(argument); break;
    case SIGN_OUT_COMMAND : signOutAction(); break;
    case DEPRECATE_COMMAND : deprecateAction(argument); break;
    case INITIALISE_COMMAND : initialiseAction(); break;
    case SET_OPTIONS_COMMAND : setOptionsAction(); break;
    case CREATE_ACCOUNT_COMMAND : createAccountAction(argument); break;
    case RESET_PASSWORD_COMMAND : resetPasswordAction(argument); break;

    default:
      argument = command; ///

      openAction(argument, quietly);
  }
}

module.exports = actions;
