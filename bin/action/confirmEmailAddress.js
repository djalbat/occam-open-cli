"use strict";

const action = require("../action"),
      emailAddressPromptOperation = require("../operation/prompt/emailAddress"),
      retrieveAccessTokenOperation = require("../operation/retrieveAccessToken"),
      confirmationCodePromptOperation = require("../operation/prompt/confirmationCode");

const { CONFIRM_EMAIL_ADDRESS_API_URI } = require("../uris"),
      { FAILED_CONFIRM_EMAIL_ADDRESS_MESSAGE, SUCCESSFUL_CONFIRM_EMAIL_ADDRESS_MESSAGE } = require("../messages");

function confirmEmailAddress(argument) {
  const emailAddress = argument,  ///
        confirmationCode = null,
        uri = CONFIRM_EMAIL_ADDRESS_API_URI,
        operations = [
          retrieveAccessTokenOperation,
          emailAddressPromptOperation,
          confirmationCodePromptOperation
        ],
        context = {
          emailAddress,
          confirmationCode
        };

  action(operations, uri, (json) => {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_CONFIRM_EMAIL_ADDRESS_MESSAGE) :
        console.log(FAILED_CONFIRM_EMAIL_ADDRESS_MESSAGE);

    process.exit();
  }, context);
}

module.exports = confirmEmailAddress;
