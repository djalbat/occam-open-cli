'use strict';

const messages = require('../messages'),
      configuration = require('../configuration'),
      callbackUtilities = require('../utilities/callback'),
      useSSHPromptCallback = require('../callback/prompt/useSSH'),
      gitHubHostNamePromptCallback = require('../callback/prompt/gitHubHostName');

const { exit } = process,
      { updateOptions } = configuration,
      { executeCallbacks } = callbackUtilities,
      { FAILED_SET_OPTIONS_MESSAGE, SUCCESSFUL_SET_OPTIONS_MESSAGE } = messages;

function setOptions() {
  const callbacks = [
          useSSHPromptCallback,
          gitHubHostNamePromptCallback
        ],
        context = {};

  executeCallbacks(callbacks, function(completed) {
    if (!completed) {
      console.log(FAILED_SET_OPTIONS_MESSAGE);

      exit();
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
  }, context);
}

module.exports = setOptions;
