"use strict";

const publishOperation = require("../operation/publish"),
      loadReleaseOperation = require("../operation/loadRelease"),
      deflateReleaseOperation = require("../operation/deflateRelease"),
      getIdentityTokenOperation = require("../operation/getIdentityToken"),
      releaseNamePromptOperation = require("../operation/prompt/releaseName"),
      checkReadmeFileExistsOperation = require("../operation/checkReadmeFileExists"),
      checkMetaJSONFileExistsOperation = require("../operation/checkMetaJSONFileExists");

const { executeOperations } = require("../utilities/operation"),
      { FAILED_PUBLISH_MESSAGE, SUCCESSFUL_PUBLISH_MESSAGE } = require("../messages");

function publish(argument) {
  const releaseName = argument, ///
        operations = [
          getIdentityTokenOperation,
          releaseNamePromptOperation,
          loadReleaseOperation,
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

    process.exit();
  }, context);
}

module.exports = publish;
