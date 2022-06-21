"use strict";

const createAccountOperation = require("../operation/createAccount"),
      usernamePromptOperation = require("../operation/prompt/username"),
      passwordPromptOperation = require("../operation/prompt/password"),
      emailAddressPromptOperation = require("../operation/prompt/emailAddress"),
      confirmPasswordPromptOperation = require("../operation/prompt/confirmPassword");

const { executeOperations } = require("../utilities/operation"),
      { SUCCESSFUL_CREATE_ACCOUNT_MESSAGE, FAILED_CREATE_ACCOUNT_MESSAGE } = require("../messages");

function createAccount(argument) {
  const emailAddress = argument,  ///
        username = null,
        password = null,
        operations = [
          emailAddressPromptOperation,
          usernamePromptOperation,
          passwordPromptOperation,
          confirmPasswordPromptOperation,
          createAccountOperation
        ],
        context = {
          username,
          password,
          emailAddress
        };

  executeOperations(operations, (completed) => {
    const success = completed,  ///
          message = success ?
                       SUCCESSFUL_CREATE_ACCOUNT_MESSAGE :
                         FAILED_CREATE_ACCOUNT_MESSAGE;

    console.log(message);

    process.exit();
  }, context);
}

module.exports = createAccount;
