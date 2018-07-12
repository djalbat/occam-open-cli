'use strict';

const messages = require('../messages'),
      callbackUtilities = require('../utilities/callback'),
      useSSHPromptCallback = require('../callback/prompt/useSSH'),
			configurationUtilities = require('../utilities/configuration'),
			hostNameSuffixPromptCallback = require('../callback/prompt/hostNameSuffix');

const { updateOptions } = configurationUtilities,
			{ executeCallbacks } = callbackUtilities,
      { FAILED_SET_OPTIONS_MESSAGE, SUCCESSFUL_SET_OPTIONS_MESSAGE } = messages;

function setOptions() {
  const callbacks = [
          useSSHPromptCallback,
          hostNameSuffixPromptCallback
        ],
        context = {};

  executeCallbacks(callbacks, function(completed) {
    if (!completed) {
      console.log(FAILED_SET_OPTIONS_MESSAGE);

      exit();
    }

    const options = context;

    updateOptions(options);

    console.log(SUCCESSFUL_SET_OPTIONS_MESSAGE);
  }, context);
}

module.exports = setOptions;
