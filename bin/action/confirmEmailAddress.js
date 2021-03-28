"use strict";

const action = require("../action"),
      emailAddressPromptCallback = require("../callback/prompt/emailAddress"),
      retrieveAccessTokenCallback = require("../callback/retrieveAccessToken"),
      confirmationCodePromptCallback = require("../callback/prompt/confirmationCode");

const { CONFIRM_EMAIL_ADDRESS_URI } = require("../uris"),
      { FAILED_CONFIRM_EMAIL_ADDRESS_MESSAGE, SUCCESSFUL_CONFIRM_EMAIL_ADDRESS_MESSAGE } = require("../messages");

function confirmEmailAddress(argument) {
  const emailAddress = argument,  ///
        confirmationCode = null,
        uri = CONFIRM_EMAIL_ADDRESS_URI,
        callbacks = [
          retrieveAccessTokenCallback,
          emailAddressPromptCallback,
          confirmationCodePromptCallback
        ],
        context = {
          emailAddress,
          confirmationCode
        };

  action(callbacks, uri, (json) => {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_CONFIRM_EMAIL_ADDRESS_MESSAGE) :
        console.log(FAILED_CONFIRM_EMAIL_ADDRESS_MESSAGE);

    process.exit();
  }, context);
}

module.exports = confirmEmailAddress;
