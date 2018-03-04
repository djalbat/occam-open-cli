'use strict';

const necessary = require('necessary');

const validate = require('../../validate'),
      messages = require('../../messages');

const { miscellaneousUtilities } = necessary,
      { validatePassword } = validate,
      { prompt } = miscellaneousUtilities,
      { INVALID_PASSWORD_MESSAGE } = messages;

function passwordPromptCallback(proceed, abort, context) {
  const hidden = true,
        description = 'Password: ',
        errorMessage = INVALID_PASSWORD_MESSAGE,
        validationFunction = validatePassword,
        options = {
          hidden: hidden,
          description: description,
          errorMessage: errorMessage,
          validationFunction: validationFunction
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