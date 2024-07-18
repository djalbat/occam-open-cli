"use strict";

const createAccountOperation = require("../operation/createAccount"),
      passwordPromptOperation = require("../operation/prompt/password"),
      usernamePromptOperation = require("../operation/prompt/username"),
      emailAddressPromptOperation = require("../operation/prompt/emailAddress"),
      updateIdentityTokenOperation = require("../operation/updateIdentityToken");

const { executeOperations } = require("../utilities/operation");

function createAccountAction(emailAddress) {
  const username = null,
        password = null,
        operations = [
          emailAddressPromptOperation,
          usernamePromptOperation,
          passwordPromptOperation,
          createAccountOperation,
          updateIdentityTokenOperation
        ],
        context = {
          emailAddress,
          username,
          password
        };

  executeOperations(operations, (completed) => {
    const { message } = context;

    console.log(message);
  }, context);
}

module.exports = createAccountAction;
