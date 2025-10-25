"use strict";

import { shellUtilities } from "necessary";

import { EMPTY_STRING } from "../../constants";
import { validateShellCommands } from "../../utilities/validate";
import { DEFAULT_SHELL_COMMANDS } from "../../defaults";
import { SHELL_COMMANDS_DESCRIPTION } from "../../descriptions";

const { prompt } = shellUtilities;

export default function setShellCommandsPromptOperation(proceed, abort, context) {
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
