"use strict";

const setOptionsOperation = require("../operation/setOptions"),
      useSSHPromptOperation = require("../operation/prompt/useSSH"),
      gitHubHostNamePromptOperation = require("../operation/prompt/gitHubHostName");

const { executeOperations } = require("../utilities/operation"),
      { FAILED_SET_OPTIONS_MESSAGE, SUCCESSFUL_SET_OPTIONS_MESSAGE } = require("../messages");

function setOptions() {
  const operations = [
          useSSHPromptOperation,
          gitHubHostNamePromptOperation,
          setOptionsOperation
        ],
        context = {};

  executeOperations(operations, (completed) => {
    const success = completed,  ///
          message = success ?
                      SUCCESSFUL_SET_OPTIONS_MESSAGE :
                        FAILED_SET_OPTIONS_MESSAGE;

    console.log(message);

    process.exit();
  }, context);
}

module.exports = setOptions;
