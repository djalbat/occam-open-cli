"use strict";

const action = require("../action"),
      usernamePromptCallback = require("../callback/prompt/username");

const { RESET_PASSWORD_API_URI } = require("../uris"),
      { FAILED_RESET_PASSWORD_MESSAGE, SUCCESSFUL_RESET_PASSWORD_MESSAGE } = require("../messages");

function resetPassword(argument) {
  const username = argument,  ///
        uri = RESET_PASSWORD_API_URI,
        callbacks = [
          usernamePromptCallback
        ],
        context = {
          username
        };

  action(callbacks, uri, (json) => {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_RESET_PASSWORD_MESSAGE) :
        console.log(FAILED_RESET_PASSWORD_MESSAGE);

    process.exit();
  }, context);
}

module.exports = resetPassword;
