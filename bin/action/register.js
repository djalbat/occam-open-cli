"use strict";

const action = require("../action"),
      usernamePromptOperation = require("../operation/prompt/username"),
      passwordPromptOperation = require("../operation/prompt/password"),
      emailAddressPromptOperation = require("../operation/prompt/emailAddress"),
      confirmPasswordPromptOperation = require("../operation/prompt/confirmPassword");

const { REGISTER_API_URI } = require("../uris"),
      { FAILED_REGISTER_MESSAGE, SUCCESSFUL_REGISTER_MESSAGE } = require("../messages");

function register(argument) {
  const emailAddress = argument,  ///
        username = null,
        password = null,
        uri = REGISTER_API_URI,
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
      console.log(SUCCESSFUL_REGISTER_MESSAGE) :
        console.log(FAILED_REGISTER_MESSAGE);

    process.exit();
  }, context);
}

module.exports = register;
