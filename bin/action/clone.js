"use strict";

const cloneOperation = require("../operation/clone"),
      cloneDependenciesOperation = require("../operation/cloneDependencies"),
      releaseNamePromptOperation = require("../operation/prompt/releaseName");

const { executeOperations } = require("../utilities/operation"),
      { SUCCESSFUL_CLONE_MESSAGE, FAILED_CLONE_MESSAGE } = require("../messages");

function cloneAction(releaseName, dependencies, headless, quietly) {
  const operations = [
          releaseNamePromptOperation,
          cloneOperation,
          cloneDependenciesOperation
        ],
        context = {
          quietly,
          headless,
          releaseName,
          dependencies
        };

  executeOperations(operations, (completed) => {
    const success = completed,  ///
          message = success ?
                      SUCCESSFUL_CLONE_MESSAGE :
                        FAILED_CLONE_MESSAGE;

    console.log(message);
  }, context);
}

module.exports = cloneAction;
