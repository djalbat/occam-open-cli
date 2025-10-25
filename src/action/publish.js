"use strict";

import publishOperation from "../operation/publish";
import loadProjectOperation from "../operation/loadProject";
import releaseToJSONOperation from "../operation/releaseToJSON";
import getIdentityTokenOperation from "../operation/getIdentityToken";
import releaseNamePromptOperation from "../operation/prompt/releaseName";
import executeShellCommandsOperation from "../operation/executeShallCommands";
import updateMetaJSONFileVersionOperation from "../operation/updateMetaJSONFileVersion";

import { DOUBLE_DASH } from "../constants";
import { executeOperations } from "../utilities/operation";
import { FAILED_PUBLISH_MESSAGE, SUCCESSFUL_PUBLISH_MESSAGE } from "../messages";

export default function publishAction(releaseName, tail, follow, dryRun, logLevel) {
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
