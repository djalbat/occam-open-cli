"use strict";

const signInOperation = require("../operation/signIn"),
      passwordPromptOperation = require("../operation/prompt/password"),
      emailAddressOrUsernamePromptOperation = require("../operation/prompt/emailAddressOrUsername");

const { executeOperations } = require("../utilities/operation"),
      { FAILED_SIGN_IN_MESSAGE, SUCCESSFUL_SIGN_IN_MESSAGE } = require("../messages");

function signIn(argument) {
  const emailAddressOrUsername = argument,  ///
        password = null,
        operations = [
          emailAddressOrUsernamePromptOperation,
          passwordPromptOperation,
          signInOperation
        ],
        context = {
          emailAddressOrUsername,
          password
        };

  executeOperations(operations, (completed) => {
    const success = completed,  ///
          message = success ?
                      SUCCESSFUL_SIGN_IN_MESSAGE :
                        FAILED_SIGN_IN_MESSAGE;

    console.log(message);

    process.exit();
  }, context);
}

module.exports = signIn;
