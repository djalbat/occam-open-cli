'use strict';

const uris = require('../uris'),
			post = require('../post'),
      state = require('../state'),
      messages = require('../messages'),
      callbackUtilities = require('../utilities/callback'),
      createReleaseCallback = require('../callback/createRelease'),
      deflateReleaseCallback = require('../callback/deflateRelease'),
			releaseNamePromptCallback = require('../callback/prompt/releaseName'),
			retrieveAccessTokenCallback = require('../callback/retrieveAccessToken'),
      checkReadmeFileExistsCallback = require('../callback/checkReadmeFileExists'),
      checkMetaJSONFileExistsCallback = require('../callback/checkMetaJSONFileExists'),
      checkMetaJSONFileRepositoryExistsCallback = require('../callback/checkMetaJSONFileRepositoryExists');

const { exit } = process,
      { PUBLISH_URI } = uris,
      { FAILED_PUBLISH_MESSAGE, SUCCESSFUL_PUBLISH_MESSAGE } = messages,
      { getReleaseName } = state,
      { executeCallbacks } = callbackUtilities;

function publish(argument) {
  const releaseName = argument || getReleaseName(),  ///
        uri = PUBLISH_URI,
        callbacks = [
          retrieveAccessTokenCallback,
          releaseNamePromptCallback,
          createReleaseCallback,
          checkReadmeFileExistsCallback,
          checkMetaJSONFileExistsCallback,
          checkMetaJSONFileRepositoryExistsCallback,
          deflateReleaseCallback
        ],
        context = {
          releaseName
        };

  executeCallbacks(callbacks, function(completed) {
    if (!completed) {
      console.log(FAILED_PUBLISH_MESSAGE);

      exit();
    }

    const data = context; ///

    post(uri, data, function(json, done) {
      const { success } = json;

      success ?
        console.log(SUCCESSFUL_PUBLISH_MESSAGE) :
          console.log(FAILED_PUBLISH_MESSAGE);

      done();
    });
  }, context);
}

module.exports = publish;
