'use strict';

const necessary = require('necessary');

const validate = require('../../validate'),
      messages = require('../../messages');

const { miscellaneousUtilities } = necessary,
      { validateAnswer } = validate,
      { prompt } = miscellaneousUtilities,
      { INVALID_ANSWER_MESSAGE } = messages;

function useSSHPromptCallback(proceed, abort, context) {
  const description = 'Use SSH when cloning: ',
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
      const yes = /^y.*/i.test(answer),
            useSSH = yes; ///

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
