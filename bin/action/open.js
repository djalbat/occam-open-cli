"use strict";

const openOperation = require("../operation/open"),
      openReleasesOperation = require("../operation/openReleases"),
      openDependenciesOperation = require("../operation/openDependencies"),
      releaseNamePromptOperation = require("../operation/prompt/releaseName");

const { executeOperations } = require("../utilities/operation"),
      { SUCCESSFUL_OPEN_MESSAGE, FAILED_OPEN_MESSAGE } = require("../messages");

function openAction(releaseName, headless, quietly, no) {
  const operations = [
          releaseNamePromptOperation,
          openDependenciesOperation,
          openOperation,
          openReleasesOperation
        ],
        context = {
          no,
          quietly,
          headless,
          releaseName
        };

  executeOperations(operations, (completed) => {
    const success = completed,  ///
          message = success ?
                      SUCCESSFUL_OPEN_MESSAGE :
                        FAILED_OPEN_MESSAGE;

    console.log(message);
  }, context);
}

module.exports = openAction;
