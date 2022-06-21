"use strict";

const deprecateOperation = require("../operation/deprecate"),
      passwordPromptOperation = require("../operation/prompt/password"),
      areYouSurePromptOperation = require("../operation/prompt/areYouSure"),
      getIdentityTokenOperation = require("../operation/getIdentityToken"),
      releaseNamePromptOperation = require("../operation/prompt/releaseName");

const { executeOperations } = require("../utilities/operation"),
      { FAILED_DEPRECATE_MESSAGE, SUCCESSFUL_DEPRECATE_MESSAGE } = require("../messages");

function deprecate(argument) {
  const releaseName = argument,  ///
        password = null,
        operations = [
          getIdentityTokenOperation,
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

    process.exit();
  }, context);
}

module.exports = deprecate;
