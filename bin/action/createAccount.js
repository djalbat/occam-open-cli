"use strict";

const createAccountOperation = require("../operation/createAccount"),
      passwordPromptOperation = require("../operation/prompt/password"),
      usernamePromptOperation = require("../operation/prompt/username"),
      setIdentityTokenOperation = require("../operation/setIdentityToken"),
      emailAddressPromptOperation = require("../operation/prompt/emailAddress");

const { executeOperations } = require("../utilities/operation");

function createAccount(argument) {
  const emailAddress = argument,  ///
        username = null,
        password = null,
        operations = [
          emailAddressPromptOperation,
          usernamePromptOperation,
          passwordPromptOperation,
          createAccountOperation,
          setIdentityTokenOperation
        ],
        context = {
          emailAddress,
          username,
          password
        };

  executeOperations(operations, (completed) => {
    const { message } = context;

    console.log(message);

    process.exit();
  }, context);
}

module.exports = createAccount;
