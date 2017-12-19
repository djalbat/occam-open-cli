'use strict';

const prompt = require('../prompt'),
      validate = require('../validate'),
      messages = require('../messages');

const { validateConfirmationCode } = validate,
      { invalidConfirmationCodeMessage } = messages;

function confirmationCodeCallback(next, done, context) {
  const description = 'Confirmation code: ',
        validationFunction = validateConfirmationCode,        
        errorMessage = invalidConfirmationCodeMessage,
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
    } else {
      done();
    }
  });
}

module.exports = confirmationCodeCallback;
