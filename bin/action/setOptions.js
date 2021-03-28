"use strict";

const useSSHPromptCallback = require("../callback/prompt/useSSH"),
      gitHubHostNamePromptCallback = require("../callback/prompt/gitHubHostName");

const { updateOptions } = require("../configuration"),
      { executeCallbacks } = require("../utilities/callback"),
      { FAILED_SET_OPTIONS_MESSAGE, SUCCESSFUL_SET_OPTIONS_MESSAGE } = require("../messages");

function setOptions() {
  const callbacks = [
          useSSHPromptCallback,
          gitHubHostNamePromptCallback
        ],
        context = {};

  executeCallbacks(callbacks, (completed) => {
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
