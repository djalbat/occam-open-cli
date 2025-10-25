"use strict";

import updateShellCommandsOperation from "../operation/updateShellCommands";
import setShellCommandsPromptOperation from "../operation/prompt/setShellCommands";

import { executeOperations } from "../utilities/operation";
import { retrieveShellCommands } from "../configuration";
import { FAILED_SET_SHELL_COMMANDS_MESSAGE, SUCCESSFUL_SET_SHELL_COMMANDS_MESSAGE } from "../messages";

export default function setShellCommandsAction() {
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
