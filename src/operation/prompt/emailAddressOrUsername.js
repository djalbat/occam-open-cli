"use strict";

import { shellUtilities } from "necessary";

import { validateEmailAddressOrUsername } from "../../utilities/validate";
import { EMAIL_ADDRESS_OR_USERNAME_DESCRIPTION } from "../../descriptions";
import { INVALID_EMAIL_ADDRESS_OR_USERNAME_MESSAGE } from "../../messages";

const { prompt } = shellUtilities;

export default function emailAddressOrUsernamePromptOperation(proceed, abort, context) {
  const { emailAddressOrUsername } = context,
        errorMessage = INVALID_EMAIL_ADDRESS_OR_USERNAME_MESSAGE;
  
  if (emailAddressOrUsername !== null) {
    const valid = validateEmailAddressOrUsername(emailAddressOrUsername);

    if (valid) {
      proceed();
      
      return;
    } else {
      console.log(errorMessage);
    }
  }

  const description = EMAIL_ADDRESS_OR_USERNAME_DESCRIPTION,
        validationFunction = validateEmailAddressOrUsername,  ///
        options = {
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (answer) => {
    const emailAddressOrUsername = answer,  ///
          valid = (emailAddressOrUsername !== null);

    if (valid) {
      Object.assign(context, {
        emailAddressOrUsername
      });

      proceed();
      
      return;
    }

    abort();
  });
}
