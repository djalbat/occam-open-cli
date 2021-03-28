"use strict";

const { shellUtilities } = require("necessary");

const { validateAnswer } = require("../../utilities/validate"),
      { isAnswerAffirmative } = require("../../utilities/prompt"),
      { INVALID_ANSWER_MESSAGE } = require("../../messages");

const { prompt } = shellUtilities;

function useSSHPromptCallback(proceed, abort, context) {
  const description = "Use SSH when cloning: ",
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

module.exports = useSSHPromptCallback;
