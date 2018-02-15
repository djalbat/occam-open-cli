'use strict';

const prompt = require('../../prompt'),
      validate = require('../../validate'),
      messages = require('../../messages');

const { validateConfirmationCode } = validate,
      { INVALID_CONFIRMATION_CODE_MESSAGE } = messages;

function confirmationCodePromptCallback(next, done, context) {
  const description = 'Confirmation code: ',
        validationFunction = validateConfirmationCode,        
        errorMessage = INVALID_CONFIRMATION_CODE_MESSAGE,
        attempts = 3,
        hidden = false,
        options = {
          description: description,
          validationFunction: validationFunction,
          errorMessage: errorMessage,
          attempts: attempts,
          hidden: hidden
        };

  prompt(options, function(confirmationCode) {
    const valid = (confirmationCode !== null);

    if (valid) {
      Object.assign(context, {
        confirmationCode: confirmationCode
      });

      next();

      return;
    }

    done();
  });
}

module.exports = confirmationCodePromptCallback;
