"use strict";

const { shellUtilities } = require("necessary");

const { validateAnswer } = require("../../utilities/validate"),
      { isAnswerAffirmative } = require("../../utilities/prompt"),
      { USE_SSH_DESCRIPTION } = require("../../descriptions"),
      { INVALID_ANSWER_MESSAGE } = require("../../messages");

const { prompt } = shellUtilities;

function useSSHPromptOperation(proceed, abort, context) {
  const description = USE_SSH_DESCRIPTION,
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

module.exports = useSSHPromptOperation;
