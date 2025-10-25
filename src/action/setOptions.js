"use strict";

import useSSHPromptOperation from "../operation/prompt/useSSH";
import updateOptionsOperation from "../operation/updateOptions";
import gitHubHostNamePromptOperation from "../operation/prompt/gitHubHostName";

import { executeOperations } from "../utilities/operation";
import { FAILED_SET_OPTIONS_MESSAGE, SUCCESSFUL_SET_OPTIONS_MESSAGE } from "../messages";

export default function setOptionsAction() {
  const operations = [
          useSSHPromptOperation,
          gitHubHostNamePromptOperation,
          updateOptionsOperation
        ],
        context = {};

  executeOperations(operations, (completed) => {
    const success = completed,  ///
          message = success ?
                      SUCCESSFUL_SET_OPTIONS_MESSAGE :
                        FAILED_SET_OPTIONS_MESSAGE;

    console.log(message);
  }, context);
}
