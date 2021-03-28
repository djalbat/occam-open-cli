"use strict";

const action = require("../action"),
      usernamePromptCallback = require("../callback/prompt/username"),
      passwordPromptCallback = require("../callback/prompt/password"),
      emailAddressPromptCallback = require("../callback/prompt/emailAddress"),
      confirmPasswordPromptCallback = require("../callback/prompt/confirmPassword");

const { REGISTER_URI } = require("../uris"),
      { FAILED_REGISTER_MESSAGE, SUCCESSFUL_REGISTER_MESSAGE } = require("../messages");

function register(argument) {
  const emailAddress = argument,  ///
        username = null,
        password = null,
        uri = REGISTER_URI,
        callbacks = [
          emailAddressPromptCallback,
          usernamePromptCallback,
          passwordPromptCallback,
          confirmPasswordPromptCallback
        ],
        context = {
          username,
          password,
          emailAddress
        };

  action(callbacks, uri, (json) => {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_REGISTER_MESSAGE) :
        console.log(FAILED_REGISTER_MESSAGE);

    process.exit();
  }, context);
}

module.exports = register;
