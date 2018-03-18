'use strict';

const necessary = require('necessary');

const post = require('../post'),
      messages = require('../messages'),
      constants = require('../constants'),
      executeCallbacks = require('../executeCallbacks'),
      checkLoggedInCallback = require('../callback/checkLoggedIn'),
      releaseNamePromptCallback = require('../callback/prompt/releaseName'),
      createDeflatedReleaseCallback = require('../callback/createDeflatedRelease');

const { miscellaneousUtilities } = necessary,
      { onETX } = miscellaneousUtilities,
      { exit } = process,
      { PUBLISH_URI } = constants,
      { SERVER_ERROR_MESSAGE, FAILED_PUBLISH_MESSAGE, SUCCESSFUL_PUBLISH_MESSAGE } = messages;

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

    const offETX = onETX(exit),
          data = context; ///

    post(uri, data, function(json) {
      offETX();

      if (json !== null) {
        const { error } = json;

        error ?
          console.log(SERVER_ERROR_MESSAGE) :
            console.log(SUCCESSFUL_PUBLISH_MESSAGE);
      }

      exit(); ///
    });
  }, context);
}

module.exports = publish;
