'use strict';

const necessary = require('necessary');

const validate = require('../../validate'),
      messages = require('../../messages'),
      promptUtilities = require('../../utilities/prompt');

const { miscellaneousUtilities } = necessary,
      { validateAnswer } = validate,
      { prompt } = miscellaneousUtilities,
      { isAnswerAffirmative } = promptUtilities,
      { INVALID_ANSWER_MESSAGE } = messages;

function areYouSurePromptCallback(proceed, abort, context) {
  const description = 'Are you sure? (y)es (n)o: ',
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
