"use strict";

const publishOperation = require("../operation/publish"),
      loadReleaseOperation = require("../operation/loadRelease"),
      packReleaseOperation = require("../operation/packRelease"),
      getIdentityTokenOperation = require("../operation/getIdentityToken"),
      releaseNamePromptOperation = require("../operation/prompt/releaseName"),
      updateMetaJSONFileVersionOperation = require("../operation/updateMetaJSONFileVersion");

const { DOUBLE_DASH } = require("../constants"),
      { executeOperations } = require("../utilities/operation"),
      { FAILED_PUBLISH_MESSAGE, SUCCESSFUL_PUBLISH_MESSAGE } = require("../messages");

function publishAction(argument, dryRun, logLevel) {
  const releaseName = argument, ///
        operations = [
          getIdentityTokenOperation,
          releaseNamePromptOperation,
          loadReleaseOperation,
          packReleaseOperation,
          publishOperation,
          updateMetaJSONFileVersionOperation
        ],
        context = {
          dryRun,
          logLevel,
          releaseName
        };

  executeOperations(operations, (completed) => {
    const { success, version = null, messages } = context,
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

module.exports = publishAction;
