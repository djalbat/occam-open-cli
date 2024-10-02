"use strict";

const publishOperation = require("../operation/publish"),
      loadProjectOperation = require("../operation/loadProject"),
      releaseToJSONOperation = require("../operation/releaseToJSON"),
      getIdentityTokenOperation = require("../operation/getIdentityToken"),
      releaseNamePromptOperation = require("../operation/prompt/releaseName"),
      executeShellCommandsOperation = require("../operation/executeShallCommands"),
      updateMetaJSONFileVersionOperation = require("../operation/updateMetaJSONFileVersion");

const { DOUBLE_DASH } = require("../constants"),
      { executeOperations } = require("../utilities/operation"),
      { FAILED_PUBLISH_MESSAGE, SUCCESSFUL_PUBLISH_MESSAGE } = require("../messages");

function publishAction(releaseName, tail, follow, dryRun, logLevel) {
  const operations = [
          getIdentityTokenOperation,
          releaseNamePromptOperation,
          loadProjectOperation,
          releaseToJSONOperation,
          publishOperation,
          updateMetaJSONFileVersionOperation,
          executeShellCommandsOperation
        ],
        success = false,
        context = {
          tail,
          follow,
          dryRun,
          success,
          logLevel,
          releaseName
        };

  executeOperations(operations, (completed) => {
    const { success, version = null, messages = [] } = context,
          messagesLength = messages.length;

    if (messagesLength > 0) {
      const message = DOUBLE_DASH;  ///

      messages.push(message);
    }

    if (version !== null) {
      const message = `Version ${version}.`;

      messages.push(message);
    }

    if (success) {
      if (!dryRun) {
        const message = SUCCESSFUL_PUBLISH_MESSAGE;

        messages.push(message);
      }
    } else {
      const message = FAILED_PUBLISH_MESSAGE;

      messages.push(message);
    }

    messages.forEach((message) => {
      console.log(message);
    });
  }, context);
}

module.exports = publishAction;
