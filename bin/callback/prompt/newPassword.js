'use strict';

const prompt = require('../../prompt'),
      validate = require('../../validate'),
      messages = require('../../messages');

const { validatePassword } = validate,
      { INVALID_PASSWORD_MESSAGE } = messages;

function newPasswordPromptCallback(proceed, abort, context) {
  const description = 'New password: ',
        validationFunction = validatePassword,        
        errorMessage = INVALID_PASSWORD_MESSAGE,
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
      Object.assign(context, {
        newPassword: newPassword
      });

      proceed();

      return;
    }

    abort();
  });
}

module.exports = newPasswordPromptCallback;