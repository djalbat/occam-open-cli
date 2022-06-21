"use strict";

const cloneOperation = require("../operation/clone"),
      repositoryOperation = require("../operation/repository"),
      releaseNamePromptOperation = require("../operation/prompt/releaseName");

const { executeOperations } = require("../utilities/operation"),
      { SUCCESSFUL_CLONE_MESSAGE, FAILED_CLONE_MESSAGE } = require("../messages");

function clone(argument) {
  const releaseName = argument,  ///
        name = releaseName, ///
        operations = [
          releaseNamePromptOperation,
          repositoryOperation,
          cloneOperation
        ],
        context = {
          name
        };

  executeOperations(operations, (completed) => {
    const success = completed,  ///
          message = success ?
                      SUCCESSFUL_CLONE_MESSAGE :
                        FAILED_CLONE_MESSAGE;

    console.log(message);

    process.exit(0);
  }, context);
}

module.exports = clone;
