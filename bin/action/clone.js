"use strict";

const cloneOperation = require("../operation/clone"),
      repositoryOperation = require("../operation/repository"),
      releaseNamePromptOperation = require("../operation/prompt/releaseName");

const { executeOperations } = require("../utilities/operation"),
      { SUCCESSFUL_CLONE_MESSAGE, FAILED_CLONE_MESSAGE } = require("../messages");

function clone(argument) {
  const releaseName = argument,  ///
        operations = [
          releaseNamePromptOperation,
          repositoryOperation,
          cloneOperation
        ],
        context = {
          releaseName
        };

  executeOperations(operations, (completed) => {
    const success = completed,  ///
          message = success ?
                      SUCCESSFUL_CLONE_MESSAGE :
                        FAILED_CLONE_MESSAGE;

    console.log(message);

    process.exit();
  }, context);
}

module.exports = clone;
