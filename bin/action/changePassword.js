"use strict";

const action = require("../action"),
      usernamePromptCallback = require("../callback/prompt/username"),
      passwordPromptCallback = require("../callback/prompt/password"),
      newPasswordPromptCallback = require("../callback/prompt/newPassword"),
      retrieveAccessTokenCallback = require("../callback/retrieveAccessToken"),
      confirmNewPasswordPromptCallback = require("../callback/prompt/confirmNewPassword");

const { CHANGE_PASSWORD_API_URI } = require("../uris"),
      { FAILED_CHANGE_PASSWORD_MESSAGE, SUCCESSFUL_CHANGE_PASSWORD_MESSAGE } = require("../messages");

function changePassword(argument) {
  const username = argument,  ///
        oldPassword = null,
        newPassword = null,
        uri = CHANGE_PASSWORD_API_URI,
        callbacks = [
          retrieveAccessTokenCallback,
          usernamePromptCallback,
          passwordPromptCallback,
          newPasswordPromptCallback,
          confirmNewPasswordPromptCallback
        ],
        context = {
          username,
          oldPassword,
          newPassword
        };

  action(callbacks, uri, (json) => {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_CHANGE_PASSWORD_MESSAGE) :
        console.log(FAILED_CHANGE_PASSWORD_MESSAGE);

    process.exit();
  }, context);
}

module.exports = changePassword;
