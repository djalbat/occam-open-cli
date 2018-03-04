'use strict';

const prompt = require('../../prompt'),
      messages = require('../../messages');

const { PASSWORDS_DO_NOT_MATCH_MESSAGE } = messages;

function confirmNewPasswordPromptCallback(proceed, abort, context) {
  const { newPassword } = context,
        description = 'Confirm new password: ',
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

  prompt(options, function(newPassword) {
    const valid = (newPassword !== null);

    if (valid) {
      proceed();
      
      return;
    }

    abort();
  });

  function validationFunction(value) {
    const valid = (value === newPassword); ///

    return valid;
  }
}

module.exports = confirmNewPasswordPromptCallback;
