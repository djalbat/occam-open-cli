"use strict";

const action = require("../action"),
      usernamePromptCallback = require("../callback/prompt/username"),
      emailAddressPromptCallback = require("../callback/prompt/emailAddress"),
      retrieveAccessTokenCallback = require("../callback/retrieveAccessToken"),
      newEmailAddressPromptCallback = require("../callback/prompt/newEmailAddress");

const { CHANGE_EMAIL_ADDRESS_API_URI } = require("../uris"),
      { FAILED_CHANGE_EMAIL_ADDRESS_MESSAGE, SUCCESSFUL_CHANGE_EMAIL_ADDRESS_MESSAGE } = require("../messages");

function changeEmailAddress(argument) {
  const username = argument,  ///
        emailAddress = null,
        uri = CHANGE_EMAIL_ADDRESS_API_URI,
        callbacks = [
          retrieveAccessTokenCallback,
          usernamePromptCallback,
          emailAddressPromptCallback,
          newEmailAddressPromptCallback
        ],
        context = {
          username,
          emailAddress
        };

  action(callbacks, uri, (json) => {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_CHANGE_EMAIL_ADDRESS_MESSAGE) :
        console.log(FAILED_CHANGE_EMAIL_ADDRESS_MESSAGE);

    process.exit();
  }, context);
}

module.exports = changeEmailAddress;
