"use strict";

const publishOperation = require("../operation/publish"),
      loadReleaseOperation = require("../operation/loadRelease"),
      deflateReleaseOperation = require("../operation/deflateRelease"),
      getIdentityTokenOperation = require("../operation/getIdentityToken"),
      releaseNamePromptOperation = require("../operation/prompt/releaseName");

const { DEFAULT_LOG_LEVEL } = require("../defaults"),
      { executeOperations } = require("../utilities/operation"),
      { FAILED_PUBLISH_MESSAGE, SUCCESSFUL_PUBLISH_MESSAGE } = require("../messages");

function publish(argument, options) {
  const { logLevel = DEFAULT_LOG_LEVEL } = options,
        releaseName = argument, ///
        operations = [
          getIdentityTokenOperation,
          releaseNamePromptOperation,
          loadReleaseOperation,
          deflateReleaseOperation,
          publishOperation
        ],
        context = {
          logLevel,
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
