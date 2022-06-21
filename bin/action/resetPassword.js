"use strict";

const resetPasswordOperation = require("../operation/resetPassword"),
      usernamePromptOperation = require("../operation/prompt/username");

const { executeOperations } = require("../utilities/operation"),
      { RESET_PASSWORD_MESSAGE } = require("../messages");

function resetPassword(argument) {
  const username = argument, ///
        operations = [
          usernamePromptOperation,
          resetPasswordOperation
        ],
        context = {
          username
        };

  executeOperations(operations, (completed) => {
    const message = RESET_PASSWORD_MESSAGE;

    console.log(message);

    process.exit(0);
  }, context);
}

module.exports = resetPassword;
