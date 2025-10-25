"use strict";

import { shellUtilities } from "necessary";

import { validateAffirmation } from "../../utilities/validate";
import { isAnswerAffirmative } from "../../utilities/prompt";
import { USE_SSH_DESCRIPTION } from "../../descriptions";
import { INVALID_AFFIRMATION_MESSAGE } from "../../messages";

const { prompt } = shellUtilities;

export default function useSSHPromptOperation(proceed, abort, context) {
  const description = USE_SSH_DESCRIPTION,
        errorMessage = INVALID_AFFIRMATION_MESSAGE,
        validationFunction = validateAffirmation,  ///
        options = {
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (answer) => {
    const valid = (answer !== null);

    if (valid) {
      const affirmative = isAnswerAffirmative(answer),
            useSSH = affirmative; ///

      Object.assign(context, {
        useSSH
      });

      proceed();

      return;
    }

    abort();
  });
}
