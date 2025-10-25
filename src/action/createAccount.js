"use strict";

import createAccountOperation from "../operation/createAccount";
import passwordPromptOperation from "../operation/prompt/password";
import usernamePromptOperation from "../operation/prompt/username";
import emailAddressPromptOperation from "../operation/prompt/emailAddress";
import updateIdentityTokenOperation from "../operation/updateIdentityToken";

import { executeOperations } from "../utilities/operation";

export default function createAccountAction(emailAddress) {
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
