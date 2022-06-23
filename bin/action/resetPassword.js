"use strict";

const resetPasswordOperation = require("../operation/resetPassword"),
      emailAddressPromptOperation = require("../operation/prompt/emailAddress");

const { executeOperations } = require("../utilities/operation"),
      { RESET_PASSWORD_MESSAGE } = require("../messages");

function resetPassword(argument) {
  const emailAddress = argument, ///
        operations = [
          emailAddressPromptOperation,
          resetPasswordOperation
        ],
        context = {
          emailAddress
        };

  executeOperations(operations, (completed) => {
    const message = RESET_PASSWORD_MESSAGE;

    console.log(message);

    process.exit();
  }, context);
}

module.exports = resetPassword;
