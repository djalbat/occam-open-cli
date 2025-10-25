"use strict";

import { shellUtilities } from "necessary";

import { CONFIRM_PASSWORD_DESCRIPTION } from "../../descriptions";
import { PASSWORDS_DO_NOT_MATCH_MESSAGE } from "../../messages";

const { prompt } = shellUtilities;

export default function confirmPasswordPromptOperation(proceed, abort, context) {
  const { password } = context,
        hidden = true,
        description = CONFIRM_PASSWORD_DESCRIPTION,
        errorMessage = PASSWORDS_DO_NOT_MATCH_MESSAGE,
        options = {
          hidden,
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (answer) => {
    const password = answer,  ///
          valid = (password !== null);

    if (valid) {
      proceed();
      
      return;
    }

    abort();
  });

  function validationFunction(value) {
    const valid = (value === password); ///

    return valid;
  }
}
