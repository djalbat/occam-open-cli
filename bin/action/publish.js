"use strict";

const publishOperation = require("../operation/publish"),
      loadReleaseOperation = require("../operation/loadRelease"),
      updateVersionOperation = require("../operation/updateVersion"),
      deflateReleaseOperation = require("../operation/deflateRelease"),
      getIdentityTokenOperation = require("../operation/getIdentityToken"),
      releaseNamePromptOperation = require("../operation/prompt/releaseName");

const { DOUBLE_DASH } = require("../constants"),
      { DEFAULT_LOG_LEVEL } = require("../defaults"),
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
          publishOperation,
          updateVersionOperation
        ],
        context = {
          logLevel,
          releaseName
        };

  executeOperations(operations, (completed) => {
    const { success, version, messages } = context,
          message = success ?
            SUCCESSFUL_PUBLISH_MESSAGE :
              FAILED_PUBLISH_MESSAGE,
          messagesLength = messages.length;

    if (messagesLength > 0) {
      const message = DOUBLE_DASH;  ///

      messages.push(message);
    }

    if (version !== null) {
      const message = `Version ${version}.`;

      messages.push(message);
    }

    messages.push(message);

    messages.forEach((message) => {
      console.log(message);
    });

    process.exit();
  }, context);
}

module.exports = publish;
