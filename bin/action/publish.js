"use strict";

const action = require("../action"),
      createReleaseCallback = require("../callback/createRelease"),
      deflateReleaseCallback = require("../callback/deflateRelease"),
      releaseNamePromptCallback = require("../callback/prompt/releaseName"),
      retrieveAccessTokenCallback = require("../callback/retrieveAccessToken"),
      checkReadmeFileExistsCallback = require("../callback/checkReadmeFileExists"),
      checkMetaJSONFileExistsCallback = require("../callback/checkMetaJSONFileExists");

const { PUBLISH_URI } = require("../uris"),
      { FAILED_PUBLISH_MESSAGE, SUCCESSFUL_PUBLISH_MESSAGE } = require("../messages");

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

  action(callbacks, uri, (json) => {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_PUBLISH_MESSAGE) :
        console.log(FAILED_PUBLISH_MESSAGE);

    process.exit();
  }, context);
}

module.exports = publish;
