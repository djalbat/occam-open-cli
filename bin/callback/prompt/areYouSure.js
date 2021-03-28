"use strict";

const { shellUtilities } = require("necessary");

const { validateAnswer } = require("../../utilities/validate"),
      { isAnswerAffirmative } = require("../../utilities/prompt"),
      { INVALID_ANSWER_MESSAGE } = require("../../messages");

const { prompt } = shellUtilities;

function areYouSurePromptCallback(proceed, abort, context) {
  const description = "Are you sure? (y)es (n)o: ",
        errorMessage = INVALID_ANSWER_MESSAGE,
        validationFunction = validateAnswer,  ///
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

module.exports = areYouSurePromptCallback;
