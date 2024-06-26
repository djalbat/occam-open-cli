"use strict";

const helpAction = require("./action/help"),
      openAction = require("./action/open"),
      cloneAction = require("./action/clone"),
      signInAction = require("./action/signIn"),
      signOutAction = require("./action/signOut"),
      versionAction = require("./action/version"),
      publishAction = require("./action/publish"),
      withdrawAction = require("./action/withdraw"),
      initialiseAction = require("./action/initialise"),
      setOptionsAction = require("./action/setOptions"),
      createAccountAction = require("./action/createAccount"),
      resetPasswordAction = require("./action/resetPassword"),
      setShellCommandsAction = require("./action/setShellCommands");

const { NO_COMMAND_GIVEN_MESSAGE } = require("./messages"),
      { DEFAULT_NO, DEFAULT_YES, DEFAULT_TAIL, DEFAULT_FOLLOW, DEFAULT_DRY_RUN, DEFAULT_QUIETLY, DEFAULT_LOG_LEVEL } = require("./defaults"),
      { HELP_COMMAND,
        OPEN_COMMAND,
        CLONE_COMMAND,
        VERSION_COMMAND,
        PUBLISH_COMMAND,
        SIGN_IN_COMMAND,
        SIGN_OUT_COMMAND,
        WITHDRAW_COMMAND,
        INITIALISE_COMMAND,
        SET_OPTIONS_COMMAND,
        CREATE_ACCOUNT_COMMAND,
        RESET_PASSWORD_COMMAND,
        SET_SHELL_COMMANDS_COMMAND } = require("./commands");

function main(command, argument, options) {
  const { no = DEFAULT_NO,
          yes = DEFAULT_YES,
          tail = DEFAULT_TAIL,
          follow = DEFAULT_FOLLOW,
          dryRun = DEFAULT_DRY_RUN,
          quietly = DEFAULT_QUIETLY,
          logLevel = DEFAULT_LOG_LEVEL } = options;

  switch (command) {
    case null: {
      console.log(NO_COMMAND_GIVEN_MESSAGE);

      break;
    }

    case HELP_COMMAND: {
      helpAction();

      break;
    }

    case OPEN_COMMAND: {
      openAction(argument, quietly, yes, no);

      break;
    }

    case CLONE_COMMAND: {
      cloneAction(argument, quietly, yes, no);

      break;
    }

    case VERSION_COMMAND: {
      versionAction();

      break;
    }

    case PUBLISH_COMMAND: {
      publishAction(argument, tail, follow, dryRun, logLevel);

      break;
    }

    case SIGN_IN_COMMAND: {
      signInAction(argument);

      break;
    }

    case SIGN_OUT_COMMAND: {
      signOutAction();

      break;
    }

    case WITHDRAW_COMMAND: {
      withdrawAction(argument);

      break;
    }

    case INITIALISE_COMMAND: {
      initialiseAction();

      break;
    }

    case SET_OPTIONS_COMMAND: {
      setOptionsAction();

      break;
    }

    case CREATE_ACCOUNT_COMMAND: {
      createAccountAction(argument);

      break;
    }

    case RESET_PASSWORD_COMMAND: {
      resetPasswordAction(argument);

      break;
    }

    case SET_SHELL_COMMANDS_COMMAND: {
      setShellCommandsAction();

      break;
    }

    default: {
      argument = command; ///

      openAction(argument, quietly, yes, no);

      break;
    }
  }
}

module.exports = main;
