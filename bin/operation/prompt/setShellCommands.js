"use strict";

const { shellUtilities } = require("necessary");

const { EMPTY_STRING } = require("../../constants"),
      { validateShellCommands } = require("../../utilities/validate"),
      { DEFAULT_SHELL_COMMANDS } = require("../../defaults"),
      { SHELL_COMMANDS_DESCRIPTION } = require("../../descriptions");

const { prompt } = shellUtilities;

function setShellCommandsPromptOperation(proceed, abort, context) {
  const { shellCommands } = context,
        initialAnswer = shellCommands, ///
        validationFunction = validateShellCommands,  ///
        description = SHELL_COMMANDS_DESCRIPTION,
        options = {
          description,
          initialAnswer,
          validationFunction
        };

  prompt(options, (answer) => {
    const shellCommands = answer; ///

    Object.assign(context, {
      shellCommands
    });

    proceed();
  });
}

module.exports = setShellCommandsPromptOperation;
