"use strict";

const signInOperation = require("../operation/signIn"),
      passwordPromptOperation = require("../operation/prompt/password"),
      setIdentityTokenOperation = require("../operation/setIdentityToken"),
      emailAddressOrUsernamePromptOperation = require("../operation/prompt/emailAddressOrUsername");

const { executeOperations } = require("../utilities/operation");

function signInAction(argument) {
  const emailAddressOrUsername = argument,  ///
        password = null,
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

    process.exit();
  }, context);
}

module.exports = signInAction;
