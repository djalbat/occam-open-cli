'use strict';

const uris = require('../uris'),
      action = require('../action'),
      messages = require('../messages'),
      createReleaseCallback = require('../callback/createRelease'),
      deflateReleaseCallback = require('../callback/deflateRelease'),
      releaseNamePromptCallback = require('../callback/prompt/releaseName'),
      retrieveAccessTokenCallback = require('../callback/retrieveAccessToken'),
      checkReadmeFileExistsCallback = require('../callback/checkReadmeFileExists'),
      checkMetaJSONFileExistsCallback = require('../callback/checkMetaJSONFileExists');

const { PUBLISH_URI } = uris,
      { FAILED_PUBLISH_MESSAGE, SUCCESSFUL_PUBLISH_MESSAGE } = messages;

function publish(argument) {
  const releaseName = argument, ///
        uri = PUBLISH_URI,
        callbacks = [
          retrieveAccessTokenCallback,
          releaseNamePromptCallback,
          createReleaseCallback,
          checkReadmeFileExistsCallback,
          checkMetaJSONFileExistsCallback,
          deflateReleaseCallback
        ],
        context = {
          releaseName
        };

  action(callbacks, uri, (json, done) => {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_PUBLISH_MESSAGE) :
        console.log(FAILED_PUBLISH_MESSAGE);

    done();
  }, context);
}

module.exports = publish;
