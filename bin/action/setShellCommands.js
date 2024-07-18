"use strict";

const updateShellCommandsOperation = require("../operation/updateShellCommands"),
      setShellCommandsPromptOperation = require("../operation/prompt/setShellCommands");

const { executeOperations } = require("../utilities/operation"),
      { retrieveShellCommands } = require("../configuration"),
      { FAILED_SET_SHELL_COMMANDS_MESSAGE, SUCCESSFUL_SET_SHELL_COMMANDS_MESSAGE } = require("../messages");

function setShellCommandsAction() {
  const operations = [
          setShellCommandsPromptOperation,
          updateShellCommandsOperation
        ],
        shellCommands = retrieveShellCommands(),
        context = {
          shellCommands
        };

  executeOperations(operations, (completed) => {
    if (!completed) {
      console.log(FAILED_SET_SHELL_COMMANDS_MESSAGE);

      return;
    }

    console.log(SUCCESSFUL_SET_SHELL_COMMANDS_MESSAGE);
  }, context);
}

module.exports = setShellCommandsAction;
