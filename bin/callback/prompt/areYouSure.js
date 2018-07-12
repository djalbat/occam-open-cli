'use strict';

const necessary = require('necessary');

const validate = require('../../validate'),
      messages = require('../../messages');

const { miscellaneousUtilities } = necessary,
      { validateAnswer } = validate,
      { prompt } = miscellaneousUtilities,
      { INVALID_ANSWER_MESSAGE } = messages;

function areYouSurePromptCallback(proceed, abort, context) {
  const description = 'Are you sure: ',
        errorMessage = INVALID_ANSWER_MESSAGE,
        validationFunction = validateAnswer,  ///
        options = {
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, function(answer) {
    const valid = (answer !== null);

    if (valid) {
      const yes = /^y.*/i.test(answer);

      if (yes) {
        proceed();

        return;
      }
    }

    abort();
  });
}

module.exports = areYouSurePromptCallback;
