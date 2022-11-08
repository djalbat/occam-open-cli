"use strict";

const openOperation = require("../operation/open"),
      releaseNamePromptOperation = require("../operation/prompt/releaseName");

const { executeOperations } = require("../utilities/operation"),
      { SUCCESSFUL_OPEN_MESSAGE, FAILED_OPEN_MESSAGE } = require("../messages");

function openAction(argument) {
  const releaseName = argument,  ///
        operations = [
          releaseNamePromptOperation,
          openOperation
        ],
        context = {
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
