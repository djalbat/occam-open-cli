"use strict";

const signInOperation = require("../operation/signIn"),
      passwordPromptOperation = require("../operation/prompt/password"),
      setIdentityTokenOperation = require("../operation/setIdentityToken"),
      emailAddressOrUsernamePromptOperation = require("../operation/prompt/emailAddressOrUsername");

const { executeOperations } = require("../utilities/operation");

function signInAction(emailAddressOrUsername) {
  const password = null,
        operations = [
          emailAddressOrUsernamePromptOperation,
          passwordPromptOperation,
          signInOperation,
          setIdentityTokenOperation
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
