"use strict";

const deprecateOperation = require("../operation/deprecate"),
      passwordPromptOperation = require("../operation/prompt/password"),
      areYouSurePromptOperation = require("../operation/prompt/areYouSure"),
      releaseNamePromptOperation = require("../operation/prompt/releaseName"),
      retrieveIdentityTokenOperation = require("../operation/retrieveIdentityToken");

const { executeOperations } = require("../utilities/operation"),
      { FAILED_DEPRECATE_MESSAGE, SUCCESSFUL_DEPRECATE_MESSAGE } = require("../messages");

function deprecate(argument) {
  const releaseName = argument,  ///
        password = null,
        operations = [
          retrieveIdentityTokenOperation,
          releaseNamePromptOperation,
          passwordPromptOperation,
          areYouSurePromptOperation,
          deprecateOperation
        ],
        context = {
          password,
          releaseName
        };

  executeOperations(operations, (completed) => {
    const success = completed,  ///
          message = success ?
                      SUCCESSFUL_DEPRECATE_MESSAGE :
                        FAILED_DEPRECATE_MESSAGE;

    console.log(message);

    process.exit(0);
  }, context);
}

module.exports = deprecate;
