"use strict";

const cloneOperation = require("../operation/clone"),
      cloneReleasesOperation = require("../operation/cloneReleases"),
      releaseNamePromptOperation = require("../operation/prompt/releaseName"),
      cloneDependenciesPromptOperation = require("../operation/prompt/cloneDependencies");

const { executeOperations } = require("../utilities/operation"),
      { SUCCESSFUL_CLONE_MESSAGE, FAILED_CLONE_MESSAGE } = require("../messages");

function cloneAction(releaseName, headless, quietly, yes, no) {
  const operations = [
          releaseNamePromptOperation,
          cloneDependenciesPromptOperation,
          cloneOperation,
          cloneReleasesOperation
        ],
        context = {
          no,
          yes,
          quietly,
          headless,
          releaseName
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
