"use strict";

import { shellUtilities } from "necessary";

import { isAnswerAffirmative } from "../../utilities/prompt";
import { validateAffirmation } from "../../utilities/validate";
import { ARE_YOU_SURE_DESCRIPTION } from "../../descriptions";
import { INVALID_AFFIRMATION_MESSAGE } from "../../messages";

const { prompt } = shellUtilities;

export default function areYouSurePromptOperation(proceed, abort, context) {
  const description = ARE_YOU_SURE_DESCRIPTION,
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
      const affirmative = isAnswerAffirmative(answer);

      if (affirmative) {
        proceed();

        return;
      }
    }

    abort();
  });
}
