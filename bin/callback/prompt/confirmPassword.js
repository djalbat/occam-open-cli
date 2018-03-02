'use strict';

const prompt = require('../../prompt'),
      messages = require('../../messages');

const { PASSWORDS_DO_NOT_MATCH_MESSAGE } = messages;

function confirmPasswordPromptCallback(proceed, abort, context) {
  const { password } = context,
        description = 'Confirm password: ',
        errorMessage = PASSWORDS_DO_NOT_MATCH_MESSAGE,
        attempts = 3,
        hidden = true,
        options = {
          description: description,
          validationFunction: validationFunction,
          errorMessage: errorMessage,
          attempts: attempts,
          hidden: hidden
        };

  prompt(options, function(password) {
    const valid = (password !== null);

    if (valid) {
      proceed();
      
      return;
    }

    abort();
  });

  function validationFunction(value) {
    const valid = (value === password); ///

    return valid;
  }
}

module.exports = confirmPasswordPromptCallback;
