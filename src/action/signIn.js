"use strict";

import signInOperation from "../operation/signIn";
import passwordPromptOperation from "../operation/prompt/password";
import updateIdentityTokenOperation from "../operation/updateIdentityToken";
import emailAddressOrUsernamePromptOperation from "../operation/prompt/emailAddressOrUsername";

import { executeOperations } from "../utilities/operation";

export default function signInAction(emailAddressOrUsername) {
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
