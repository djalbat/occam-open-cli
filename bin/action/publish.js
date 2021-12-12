"use strict";

const action = require("../action"),
      createReleaseOperation = require("../operation/createRelease"),
      deflateReleaseOperation = require("../operation/deflateRelease"),
      releaseNamePromptOperation = require("../operation/prompt/releaseName"),
      retrieveAccessTokenOperation = require("../operation/retrieveAccessToken"),
      checkReadmeFileExistsOperation = require("../operation/checkReadmeFileExists"),
      checkMetaJSONFileExistsOperation = require("../operation/checkMetaJSONFileExists");

const { PUBLISH_API_URI } = require("../uris"),
      { FAILED_PUBLISH_MESSAGE, SUCCESSFUL_PUBLISH_MESSAGE } = require("../messages");

function publish(argument) {
  const releaseName = argument, ///
        uri = PUBLISH_API_URI,
        operations = [
          retrieveAccessTokenOperation,
          releaseNamePromptOperation,
          createReleaseOperation,
          checkReadmeFileExistsOperation,
          checkMetaJSONFileExistsOperation,
          deflateReleaseOperation
        ],
        context = {
          releaseName
        };

  action(operations, uri, (json) => {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_PUBLISH_MESSAGE) :
        console.log(FAILED_PUBLISH_MESSAGE);

    process.exit();
  }, context);
}

module.exports = publish;
