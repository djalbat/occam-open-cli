"use strict";

const { characters } = require("necessary");

const { execute } = require("../utilities/shell");
const { EMPTY_STRING } = require("../constants");
const { retrieveShellCommands } = require("../configuration");

const { DASH_CHARACTER } = characters;

function executeShellCommandsOperation(proceed, abort, context) {
  const { success, releaseName } = context;

  if (success) {
    let shellCommands = retrieveShellCommands();

    if (shellCommands !== EMPTY_STRING) {
      shellCommands = shellCommands.replace(/{packageName}/, releaseName);  ///

      const output = execute(shellCommands),
            outputs = output.split(/\n/),
            outputsLength = outputs.length;

      if (outputsLength > 0) {
        const { messages } = context,
              message = DASH_CHARACTER; //

        messages.push(message);

        outputs.forEach((output) => {
          const message = output; ///

          messages.push(message);
        });
      }
    }
  }

  proceed();
}

module.exports = executeShellCommandsOperation;
