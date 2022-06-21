"use strict";

const action = require("../action"),
      usernamePromptOperation = require("../operation/prompt/username"),
      passwordPromptOperation = require("../operation/prompt/password"),
      emailAddressPromptOperation = require("../operation/prompt/emailAddress"),
      confirmPasswordPromptOperation = require("../operation/prompt/confirmPassword");

const { CREATE_ACCOUNT_API_URI } = require("../uris"),
      { SUCCESSFUL_CREATE_ACCOUNT_MESSAGE, FAILED_CREATE_ACCOUNT_MESSAGE } = require("../messages");

function createAccount(argument) {
  const emailAddress = argument,  ///
        username = null,
        password = null,
        uri = CREATE_ACCOUNT_API_URI,
        operations = [
          emailAddressPromptOperation,
          usernamePromptOperation,
          passwordPromptOperation,
          confirmPasswordPromptOperation
        ],
        context = {
          username,
          password,
          emailAddress
        };

  action(operations, uri, (json) => {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_CREATE_ACCOUNT_MESSAGE) :
        console.log(FAILED_CREATE_ACCOUNT_MESSAGE);

    process.exit();
  }, context);
}

module.exports = createAccount;
