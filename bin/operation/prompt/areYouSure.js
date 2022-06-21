"use strict";

const { shellUtilities } = require("necessary");

const { validateAffirmation } = require("../../utilities/validate"),
      { isAnswerAffirmative } = require("../../utilities/prompt"),
      { ARE_YOU_SURE_DESCRIPTION } = require("../../descriptions"),
      { INVALID_AFFIRMATION_MESSAGE } = require("../../messages");

const { prompt } = shellUtilities;

function areYouSurePromptOperation(proceed, abort, context) {
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

module.exports = areYouSurePromptOperation;
