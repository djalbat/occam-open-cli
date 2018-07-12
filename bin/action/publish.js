'use strict';

const post = require('../post'),
      messages = require('../messages'),
      constants = require('../constants'),
			callbackUtilities = require('../utilities/callback'),
      checkLoggedInCallback = require('../callback/checkLoggedIn'),
      releaseNamePromptCallback = require('../callback/prompt/releaseName'),
      createDeflatedReleaseCallback = require('../callback/createDeflatedRelease');


const { exit } = process,
      { PUBLISH_URI } = constants,
      { FAILED_PUBLISH_MESSAGE, SUCCESSFUL_PUBLISH_MESSAGE } = messages,
      { executeCallbacks } = callbackUtilities;;

function publish(argument) {
  const releaseName = argument,  ///
        uri = PUBLISH_URI,
        callbacks = [
          checkLoggedInCallback,
          releaseNamePromptCallback,
          createDeflatedReleaseCallback
        ],
        context = {
          releaseName: releaseName
        };

  executeCallbacks(callbacks, function(completed) {
    if (!completed) {
      console.log(FAILED_PUBLISH_MESSAGE);

      exit();
    }

    const data = context; ///

    post(uri, data, function(json) {
      const { success } = json;

      success ?
        console.log(SUCCESSFUL_PUBLISH_MESSAGE) :
          console.log(FAILED_PUBLISH_MESSAGE);
    });
  }, context);
}

module.exports = publish;
