"use strict";

const useSSHPromptOperation = require("../operation/prompt/useSSH"),
      updateOptionsOperation = require("../operation/updateOptions"),
      gitHubHostNamePromptOperation = require("../operation/prompt/gitHubHostName");

const { executeOperations } = require("../utilities/operation"),
      { FAILED_SET_OPTIONS_MESSAGE, SUCCESSFUL_SET_OPTIONS_MESSAGE } = require("../messages");

function setOptionsAction() {
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

module.exports = setOptionsAction;
