"use strict";

const publishOperation = require("../operation/publish"),
      createReleaseOperation = require("../operation/createRelease"),
      deflateReleaseOperation = require("../operation/deflateRelease"),
      releaseNamePromptOperation = require("../operation/prompt/releaseName"),
      retrieveIdentityTokenOperation = require("../operation/retrieveIdentityToken"),
      checkReadmeFileExistsOperation = require("../operation/checkReadmeFileExists"),
      checkMetaJSONFileExistsOperation = require("../operation/checkMetaJSONFileExists");

const { executeOperations } = require("../utilities/operation"),
      { FAILED_PUBLISH_MESSAGE, SUCCESSFUL_PUBLISH_MESSAGE } = require("../messages");

function publish(argument) {
  const releaseName = argument, ///
        operations = [
          retrieveIdentityTokenOperation,
          releaseNamePromptOperation,
          createReleaseOperation,
          checkReadmeFileExistsOperation,
          checkMetaJSONFileExistsOperation,
          deflateReleaseOperation,
          publishOperation
        ],
        context = {
          releaseName
        };

  executeOperations(operations, (completed) => {
    const success = completed,  ///
          message = success ?
                      SUCCESSFUL_PUBLISH_MESSAGE :
                        FAILED_PUBLISH_MESSAGE;

    console.log(message);

    process.exit(0);
  }, context);
}

module.exports = publish;
