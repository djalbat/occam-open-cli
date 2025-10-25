"use strict";

import { shellUtilities } from "necessary";

import { validateEmailAddress } from "../../utilities/validate";
import { EMAIL_ADDRESS_DESCRIPTION } from "../../descriptions";
import { INVALID_EMAIL_ADDRESS_MESSAGE } from "../../messages";

const { prompt } = shellUtilities;

export default function emailAddressPromptOperation(proceed, abort, context) {
  const { emailAddress } = context,
        errorMessage = INVALID_EMAIL_ADDRESS_MESSAGE;
  
  if (emailAddress !== null) {
    const valid = validateEmailAddress(emailAddress);

    if (valid) {
      proceed();
      
      return;
    } else {
      console.log(errorMessage);
    }
  }

  const description = EMAIL_ADDRESS_DESCRIPTION,
        validationFunction = validateEmailAddress,  ///
        options = {
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (answer) => {
    const emailAddress = answer,  ///
          valid = (emailAddress !== null);

    if (valid) {
      Object.assign(context, {
        emailAddress
      });

      proceed();
      
      return;
    }

    abort();
  });
}
