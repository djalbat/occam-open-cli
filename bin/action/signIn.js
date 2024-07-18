"use strict";

const signInOperation = require("../operation/signIn"),
      passwordPromptOperation = require("../operation/prompt/password"),
      updateIdentityTokenOperation = require("../operation/updateIdentityToken"),
      emailAddressOrUsernamePromptOperation = require("../operation/prompt/emailAddressOrUsername");

const { executeOperations } = require("../utilities/operation");

function signInAction(emailAddressOrUsername) {
  const password = null,
        operations = [
          emailAddressOrUsernamePromptOperation,
          passwordPromptOperation,
          signInOperation,
          updateIdentityTokenOperation
        ],
        context = {
          emailAddressOrUsername,
          password
        };

  executeOperations(operations, (completed) => {
    const { message } = context;

    console.log(message);
  }, context);
}

module.exports = signInAction;
