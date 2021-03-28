"use strict";

const action = require("../action"),
      emailAddressPromptCallback = require("../callback/prompt/emailAddress"),
      retrieveAccessTokenCallback = require("../callback/retrieveAccessToken");

const { RESEND_CONFIRMATION_CODE_URI } = require("../uris"),
      { SUCCESSFUL_RESEND_CONFIRMATION_CODE_MESSAGE, FAILED_RESEND_CONFIRMATION_CODE_MESSAGE } = require("../messages");

function resendConfirmationCode(argument) {
  const emailAddress = argument,  ///
        uri = RESEND_CONFIRMATION_CODE_URI,
        callbacks = [
          retrieveAccessTokenCallback,
          emailAddressPromptCallback
        ],
        context = {
          emailAddress
        };

  action(callbacks, uri, (json) => {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_RESEND_CONFIRMATION_CODE_MESSAGE) :
        console.log(FAILED_RESEND_CONFIRMATION_CODE_MESSAGE);

    process.exit();
  }, context);
}

module.exports = resendConfirmationCode;
