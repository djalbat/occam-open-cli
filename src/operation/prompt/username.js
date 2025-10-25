"use strict";

import { shellUtilities } from "necessary";

import { validateUsername } from "../../utilities/validate";
import { USERNAME_DESCRIPTION } from "../../descriptions";
import { INVALID_USERNAME_MESSAGE } from "../../messages";

const { prompt } = shellUtilities;

export default function usernamePromptOperation(proceed, abort, context) {
  const { username } = context,
        errorMessage = INVALID_USERNAME_MESSAGE;

  if (username !== null) {
    const valid = validateUsername(username);

    if (valid) {
      proceed();
      
      return;
    } else {
      console.log(errorMessage);
    }
  }

  const description = USERNAME_DESCRIPTION,
        validationFunction = validateUsername,  ///
        options = {
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (answer) => {
    const username = answer,  ///
          valid = (username !== null);

    if (valid) {
      Object.assign(context, {
        username
      });

      proceed();
      
      return;
    }

    abort();
  });
}
