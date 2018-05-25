'use strict';

const post = require('../post'),
      messages = require('../messages'),
      constants = require('../constants'),
      executeCallbacks = require('../executeCallbacks'),
      releaseNamePromptCallback = require('../callback/prompt/releaseName'),
      checkLoggedInCallback = require('../callback/checkLoggedIn'),
      createReleaseCallback = require('../callback/createRelease'),
      deflateReleaseCallback = require('../callback/deflateRelease'),
      checkReadmeFileExistsCallback = require('../callback/checkReadmeFileExists'),
      checkMetaJSONFileExistsCallback = require('../callback/checkMetaJSONFileExists'),
      checkMetaJSONFileRepositoryExistsCallback = require('../callback/checkMetaJSONFileRepositoryExists');

const { exit } = process,
      { PUBLISH_URI } = constants,
      { FAILED_PUBLISH_MESSAGE, SUCCESSFUL_PUBLISH_MESSAGE } = messages;

function publish(argument) {
  const releaseName = argument,  ///
        uri = PUBLISH_URI,
        callbacks = [
          checkLoggedInCallback,
          releaseNamePromptCallback,
          createReleaseCallback,
          checkReadmeFileExistsCallback,
          checkMetaJSONFileExistsCallback,
          checkMetaJSONFileRepositoryExistsCallback,
          deflateReleaseCallback
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
