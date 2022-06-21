"use strict";

const action = require("../action"),
      passwordPromptOperation = require("../operation/prompt/password"),
      emailAddressPromptOperation = require("../operation/prompt/emailAddress");

const { SIGN_IN_API_URI } = require("../uris"),
      { addAccessToken } = require("../configuration"),
      { FAILED_SIGN_IN_MESSAGE, SUCCESSFUL_SIGN_IN_MESSAGE } = require("../messages");

function signIn(argument) {
  const emailAddress = argument,  ///
        password = null,
        uri = SIGN_IN_API_URI,
        operations = [
          emailAddressPromptOperation,
          passwordPromptOperation
        ],
        context = {
          emailAddress,
          password
        };

  action(operations, uri, (json) => {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_SIGN_IN_MESSAGE) :
        console.log(FAILED_SIGN_IN_MESSAGE);

    if (success) {
      const { accessToken } = json;

      addAccessToken(accessToken);
    }

    process.exit();
  }, context);
}

module.exports = signIn;
