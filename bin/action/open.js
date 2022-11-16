"use strict";

const openOperation = require("../operation/open"),
      openReleasesOperation = require("../operation/openReleases"),
      releaseNamePromptOperation = require("../operation/prompt/releaseName");

const { executeOperations } = require("../utilities/operation"),
      { SUCCESSFUL_OPEN_MESSAGE, FAILED_OPEN_MESSAGE } = require("../messages");

function openAction(argument, quietly, yes) {
  const releaseName = argument,  ///
        operations = [
          releaseNamePromptOperation,
          openOperation,
          openReleasesOperation
        ],
        context = {
          yes,
          quietly,
          releaseName
        };

  executeOperations(operations, (completed) => {
    const success = completed,  ///
          message = success ?
                      SUCCESSFUL_OPEN_MESSAGE :
                        FAILED_OPEN_MESSAGE;

    console.log(message);

    process.exit();
  }, context);
}

module.exports = openAction;
