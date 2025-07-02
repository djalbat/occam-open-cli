"use strict";

const openOperation = require("../operation/open"),
      openReleasesOperation = require("../operation/openReleasees"),
      releaseNamePromptOperation = require("../operation/prompt/releaseName");

const { executeOperations } = require("../utilities/operation"),
      { SUCCESSFUL_OPEN_MESSAGE, FAILED_OPEN_MESSAGE } = require("../messages");

function openAction(releaseName, dependencies, headless, quietly, yes) {
  const operations = [
          releaseNamePromptOperation,
          openOperation,
          openReleasesOperation
        ],
        context = {
          yes,
          quietly,
          headless,
          releaseName,
          dependencies
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
