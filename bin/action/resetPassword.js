"use strict";

const resetPasswordOperation = require("../operation/resetPassword"),
      emailAddressPromptOperation = require("../operation/prompt/emailAddress");

const { executeOperations } = require("../utilities/operation");

function resetPasswordAction(emailAddress) {
  const operations = [
          emailAddressPromptOperation,
          resetPasswordOperation
        ],
        context = {
          emailAddress
        };

  executeOperations(operations, (completed) => {
    const { message } = context;

    console.log(message);
  }, context);
}

module.exports = resetPasswordAction;
