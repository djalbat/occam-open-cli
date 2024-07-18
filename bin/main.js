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

const { NO_ARGUMENT_GIVEN_MESSAGE, COMMAND_NOT_RECOGNISED_MESSAGE } = require("./messages"),
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
    case HELP_COMMAND: {
      helpAction();

      break;
    }

    case VERSION_COMMAND: {
      versionAction();

      break;
    }

    case INITIALISE_COMMAND: {
      initialiseAction();

      break;
    }

    case OPEN_COMMAND: {
      if (argument === null) {
        console.log(NO_ARGUMENT_GIVEN_MESSAGE);
      } else {
        const releaseName = argument; ///

        openAction(releaseName, quietly, no);
      }

      break;
    }

    case CLONE_COMMAND: {
      if (argument === null) {
        console.log(NO_ARGUMENT_GIVEN_MESSAGE);
      } else {
        const releaseName = argument;  ///

        cloneAction(releaseName, quietly, yes, no);
      }

      break;
    }

    case PUBLISH_COMMAND: {
      if (argument === null) {
        console.log(NO_ARGUMENT_GIVEN_MESSAGE);
      } else {
        const releaseName = argument;  ///

        publishAction(releaseName, tail, follow, dryRun, logLevel);
      }

      break;
    }

    case SIGN_IN_COMMAND: {
      const emailAddressOrUsername = argument;  ///

      signInAction(emailAddressOrUsername);

      break;
    }

    case SIGN_OUT_COMMAND: {
      signOutAction();

      break;
    }

    case WITHDRAW_COMMAND: {
      const releaseName = argument;  ///

      withdrawAction(releaseName);

      break;
    }

    case SET_OPTIONS_COMMAND: {
      setOptionsAction();

      break;
    }

    case CREATE_ACCOUNT_COMMAND: {
      const emailAddress = argument;  ///

      createAccountAction(emailAddress);

      break;
    }

    case RESET_PASSWORD_COMMAND: {
      const emailAddress = argument; ///

      resetPasswordAction(emailAddress);

      break;
    }

    case SET_SHELL_COMMANDS_COMMAND: {
      setShellCommandsAction();

      break;
    }

    default: {
      console.log(COMMAND_NOT_RECOGNISED_MESSAGE);

      break;
    }
  }
}

module.exports = main;
