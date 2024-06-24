"use strict";

const { shellUtilities } = require("necessary");

const { EMPTY_STRING } = require("../../constants"),
      { validateShellCommands } = require("../../utilities/validate"),
      { DEFAULT_SHELL_COMMANDS } = require("../../defaults"),
      { SHELL_COMMANDS_DESCRIPTION } = require("../../descriptions");

const { prompt } = shellUtilities;

function setShellCommandsPromptOperation(proceed, abort, context) {
  const { shellCommands } = context,
        description = SHELL_COMMANDS_DESCRIPTION,
        initialAnswer = shellCommands, ///
        validationFunction = validateShellCommands,  ///
        options = {
          description,
          initialAnswer,
          validationFunction
        };

  prompt(options, (answer) => {
    let shellCommands = answer; ///

    const valid = (shellCommands !== null);

    if (valid) {
      if (shellCommands === EMPTY_STRING) {
        shellCommands = DEFAULT_SHELL_COMMANDS;
      }

      Object.assign(context, {
        shellCommands
      });

      proceed();

      return;
    }

    abort();
  });
}

module.exports = setShellCommandsPromptOperation;
