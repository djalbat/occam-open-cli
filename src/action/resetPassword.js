"use strict";

import resetPasswordOperation from "../operation/resetPassword";
import emailAddressPromptOperation from "../operation/prompt/emailAddress";

import { executeOperations } from "../utilities/operation";

export default function resetPasswordAction(emailAddress) {
  const operations = [
          emailAddressPromptOperation,
          resetPasswordOperation
        ],
        context = {
          emailAddress
        };

  executeOperations(operations, (completed) => {
    const { message } = context;

    console.log(message);
  }, context);
}
