'use strict';

const prompt = require('../../prompt'),
      validate = require('../../validate'),
      messages = require('../../messages');

const { validatePassword } = validate,
      { INVALID_PASSWORD_MESSAGE } = messages;

function passwordPromptCallback(proceed, abort, context) {
  const description = 'Password: ',
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

  prompt(options, function(password) {
    const valid = (password !== null);

    if (valid) {
      Object.assign(context, {
        password: password
      });

      proceed();

      return;
    }

    abort();
  });
}

module.exports = passwordPromptCallback;