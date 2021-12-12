"use strict";

const useSSHPromptOperation = require("../operation/prompt/useSSH"),
      gitHubHostNamePromptOperation = require("../operation/prompt/gitHubHostName");

const { updateOptions } = require("../configuration"),
      { executeOperations } = require("../utilities/operation"),
      { FAILED_SET_OPTIONS_MESSAGE, SUCCESSFUL_SET_OPTIONS_MESSAGE } = require("../messages");

function setOptions() {
  const operations = [
          useSSHPromptOperation,
          gitHubHostNamePromptOperation
        ],
        context = {};

  executeOperations(operations, (completed) => {
    if (!completed) {
      console.log(FAILED_SET_OPTIONS_MESSAGE);

      process.exit(1);
    }

    const { useSSH } = context,
          options = {};

    if (useSSH) {
      const { gitHubHostName } = context,
            ssh = {
              gitHubHostName
            };

      Object.assign(options, {
        ssh
      });
    }

    updateOptions(options);

    console.log(SUCCESSFUL_SET_OPTIONS_MESSAGE);

    process.exit();
  }, context);
}

module.exports = setOptions;
