"use strict";

const { shellUtilities } = require("necessary");

const { validateAnswer } = require("../../utilities/validate"),
      { isAnswerAffirmative } = require("../../utilities/prompt"),
      { INVALID_ANSWER_MESSAGE } = require("../../messages"),
      { ARE_YOU_SURE_DESCRIPTION } = require("../../descriptions");

const { prompt } = shellUtilities;

function areYouSurePromptOperation(proceed, abort, context) {
  const description = ARE_YOU_SURE_DESCRIPTION,
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

module.exports = areYouSurePromptOperation;
