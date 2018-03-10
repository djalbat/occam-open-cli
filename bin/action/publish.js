'use strict';

const action = require('../action'),
      messages = require('../messages'),
      constants = require('../constants'),
      createReleaseCallback = require('../callback/createRelease'),
      checkLoggedInCallback = require('../callback/checkLoggedIn'),
      packageNamePromptCallback = require('../callback/prompt/packageName');

const { PUBLISH_URI } = constants,
      { FAILED_PUBLISH_MESSAGE, SUCCESSFUL_PUBLISH_MESSAGE } = messages;

function publish(argument) {
  const packageName = argument,  ///
        callbacks = [
          checkLoggedInCallback,
          packageNamePromptCallback,
          createReleaseCallback
        ],
        context = {
          packageName: packageName
        },
        uri = PUBLISH_URI;

  action(callbacks, context, uri, function(json) {
    const { success } = json;

    if (success) {
      const { release } = json;

      console.log(SUCCESSFUL_PUBLISH_MESSAGE);
    } else {
      console.log(FAILED_PUBLISH_MESSAGE);
    }
  });
}

module.exports = publish;
