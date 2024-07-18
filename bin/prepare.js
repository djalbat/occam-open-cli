"use strict";

const changeDirectory = require("./changeDirectory");

const { DEFAULT_HELP, DEFAULT_VERSION } = require("./defaults"),
      { HELP_COMMAND,
        OPEN_COMMAND,
        VERSION_COMMAND,
        SIGN_IN_COMMAND,
        SIGN_OUT_COMMAND,
        INITIALISE_COMMAND,
        SET_OPTIONS_COMMAND,
        SET_SHELL_COMMANDS_COMMAND } = require("./commands");

function prepare(command, argument, options, main) {
  const { help = DEFAULT_HELP, version = DEFAULT_VERSION } = options;

  if (false) {
    ///
  } else if (help) {
    command = HELP_COMMAND;
  } else if (version) {
    command = VERSION_COMMAND;
  }

  if ((command === HELP_COMMAND) ||
      (command === VERSION_COMMAND) ||
      (command === INITIALISE_COMMAND)) {

    main(command, argument, options);

    return;
  }

  const directoryName = changeDirectory();

  if (directoryName !== null) {
    argument = directoryName; ///
  }

  if (argument === null) {
    if ((command !== SIGN_IN_COMMAND) &&
        (command !== SIGN_OUT_COMMAND) &&
        (command !== SET_OPTIONS_COMMAND) &&
        (command !== SET_SHELL_COMMANDS_COMMAND)) {

      argument = command; ///

      command = OPEN_COMMAND;
    }
  }

  if (command === null) {
    command = OPEN_COMMAND;
  }

  main(command, argument, options);
}

module.exports = prepare;
