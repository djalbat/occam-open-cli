"use strict";

const action = require("../action"),
      usernamePromptOperation = require("../operation/prompt/username"),
      emailAddressPromptOperation = require("../operation/prompt/emailAddress"),
      retrieveAccessTokenOperation = require("../operation/retrieveAccessToken"),
      newEmailAddressPromptOperation = require("../operation/prompt/newEmailAddress");

const { CHANGE_EMAIL_ADDRESS_API_URI } = require("../uris"),
      { FAILED_CHANGE_EMAIL_ADDRESS_MESSAGE, SUCCESSFUL_CHANGE_EMAIL_ADDRESS_MESSAGE } = require("../messages");

function changeEmailAddress(argument) {
  const username = argument,  ///
        emailAddress = null,
        uri = CHANGE_EMAIL_ADDRESS_API_URI,
        operations = [
          retrieveAccessTokenOperation,
          usernamePromptOperation,
          emailAddressPromptOperation,
          newEmailAddressPromptOperation
        ],
        context = {
          username,
          emailAddress
        };

  action(operations, uri, (json) => {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_CHANGE_EMAIL_ADDRESS_MESSAGE) :
        console.log(FAILED_CHANGE_EMAIL_ADDRESS_MESSAGE);

    process.exit();
  }, context);
}

module.exports = changeEmailAddress;
