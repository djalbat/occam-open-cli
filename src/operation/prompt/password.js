"use strict";

import { shellUtilities } from "necessary";

import { validatePassword } from "../../utilities/validate";
import { PASSWORD_DESCRIPTION } from "../../descriptions";
import { INVALID_PASSWORD_MESSAGE } from "../../messages";

const { prompt } = shellUtilities;

export default function passwordPromptOperation(proceed, abort, context) {
  const hidden = true,
        description = PASSWORD_DESCRIPTION,
        errorMessage = INVALID_PASSWORD_MESSAGE,
        validationFunction = validatePassword,  ///
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
      Object.assign(context, {
        password
      });

      proceed();

      return;
    }

    abort();
  });
}
