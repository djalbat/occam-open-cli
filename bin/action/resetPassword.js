"use strict";

const resetPasswordOperation = require("../operation/resetPassword"),
      emailAddressPromptOperation = require("../operation/prompt/emailAddress");

const { executeOperations } = require("../utilities/operation");

function resetPasswordAction(argument) {
  const emailAddress = argument, ///
        operations = [
          emailAddressPromptOperation,
          resetPasswordOperation
        ],
        context = {
          emailAddress
        };

  executeOperations(operations, (completed) => {
    const { message } = context;

    console.log(message);

    process.exit();
  }, context);
}

module.exports = resetPasswordAction;
