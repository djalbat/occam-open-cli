"use strict";

const action = require("../action"),
      emailAddressPromptOperation = require("../operation/prompt/emailAddress"),
      retrieveAccessTokenOperation = require("../operation/retrieveAccessToken");

const { RESEND_CONFIRMATION_CODE_API_URI } = require("../uris"),
      { SUCCESSFUL_RESEND_CONFIRMATION_CODE_MESSAGE, FAILED_RESEND_CONFIRMATION_CODE_MESSAGE } = require("../messages");

function resendConfirmationCode(argument) {
  const emailAddress = argument,  ///
        uri = RESEND_CONFIRMATION_CODE_API_URI,
        operations = [
          retrieveAccessTokenOperation,
          emailAddressPromptOperation
        ],
        context = {
          emailAddress
        };

  action(operations, uri, (json) => {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_RESEND_CONFIRMATION_CODE_MESSAGE) :
        console.log(FAILED_RESEND_CONFIRMATION_CODE_MESSAGE);

    process.exit();
  }, context);
}

module.exports = resendConfirmationCode;
