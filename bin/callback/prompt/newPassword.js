'use strict';

const necessary = require('necessary');

const validate = require('../../validate'),
      messages = require('../../messages');

const { miscellaneousUtilities } = necessary,
      { validatePassword } = validate,
      { prompt } = miscellaneousUtilities,
      { INVALID_PASSWORD_MESSAGE } = messages;

function newPasswordPromptCallback(proceed, abort, context) {
  const hidden = true,
        description = 'New password: ',
        errorMessage = INVALID_PASSWORD_MESSAGE,
        validationFunction = validatePassword,
        options = {
          hidden: hidden,
          description: description,
          errorMessage: errorMessage,
          validationFunction: validationFunction
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