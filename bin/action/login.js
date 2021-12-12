"use strict";

const action = require("../action"),
      passwordPromptOperation = require("../operation/prompt/password"),
      emailAddressPromptOperation = require("../operation/prompt/emailAddress");

const { LOGIN_API_URI } = require("../uris"),
      { addAccessToken } = require("../configuration"),
      { FAILED_LOGIN_MESSAGE, SUCCESSFUL_LOGIN_MESSAGE } = require("../messages");

function login(argument) {
  const emailAddress = argument,  ///
        password = null,
        uri = LOGIN_API_URI,
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
      console.log(SUCCESSFUL_LOGIN_MESSAGE) :
        console.log(FAILED_LOGIN_MESSAGE);

    if (success) {
      const { accessToken } = json;

      addAccessToken(accessToken);
    }

    process.exit();
  }, context);
}

module.exports = login;
