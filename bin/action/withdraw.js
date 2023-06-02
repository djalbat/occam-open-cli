"use strict";

const withdrawOperation = require("../operation/withdraw"),
      areYouSurePromptOperation = require("../operation/prompt/areYouSure"),
      getIdentityTokenOperation = require("../operation/getIdentityToken"),
      releaseNamePromptOperation = require("../operation/prompt/releaseName");

const { executeOperations } = require("../utilities/operation"),
      { FAILED_WITHDRAW_MESSAGE, SUCCESSFUL_WITHDRAW_MESSAGE } = require("../messages");

function withdrawAction(argument) {
  const releaseName = argument,  ///
        password = null,
        operations = [
          getIdentityTokenOperation,
          releaseNamePromptOperation,
          areYouSurePromptOperation,
          withdrawOperation
        ],
        context = {
          password,
          releaseName
        };

  executeOperations(operations, (completed) => {
    const success = completed,  ///
          message = success ?
                      SUCCESSFUL_WITHDRAW_MESSAGE :
                        FAILED_WITHDRAW_MESSAGE;

    console.log(message);

    process.exit();
  }, context);
}

module.exports = withdrawAction;
