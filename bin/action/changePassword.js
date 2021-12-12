"use strict";

const action = require("../action"),
      usernamePromptOperation = require("../operation/prompt/username"),
      passwordPromptOperation = require("../operation/prompt/password"),
      newPasswordPromptOperation = require("../operation/prompt/newPassword"),
      retrieveAccessTokenOperation = require("../operation/retrieveAccessToken"),
      confirmNewPasswordPromptOperation = require("../operation/prompt/confirmNewPassword");

const { CHANGE_PASSWORD_API_URI } = require("../uris"),
      { FAILED_CHANGE_PASSWORD_MESSAGE, SUCCESSFUL_CHANGE_PASSWORD_MESSAGE } = require("../messages");

function changePassword(argument) {
  const username = argument,  ///
        oldPassword = null,
        newPassword = null,
        uri = CHANGE_PASSWORD_API_URI,
        operations = [
          retrieveAccessTokenOperation,
          usernamePromptOperation,
          passwordPromptOperation,
          newPasswordPromptOperation,
          confirmNewPasswordPromptOperation
        ],
        context = {
          username,
          oldPassword,
          newPassword
        };

  action(operations, uri, (json) => {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_CHANGE_PASSWORD_MESSAGE) :
        console.log(FAILED_CHANGE_PASSWORD_MESSAGE);

    process.exit();
  }, context);
}

module.exports = changePassword;
