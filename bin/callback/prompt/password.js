'use strict';

const necessary = require('necessary');

const messages = require('../../messages'),
      validateUtilities = require('../../utilities/validate');

const { miscellaneousUtilities } = necessary,
      { prompt } = miscellaneousUtilities,
      { validatePassword } = validateUtilities,
      { INVALID_PASSWORD_MESSAGE } = messages;

function passwordPromptCallback(proceed, abort, context) {
  const hidden = true,
        description = 'Password: ',
        errorMessage = INVALID_PASSWORD_MESSAGE,
        validationFunction = validatePassword,  ///
        options = {
          hidden,
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (password) => {
    const valid = (password !== null);

    if (valid) {
      Object.assign(context, {
        password
      });

      proceed();

      return;
    }

    abort();
  });
}

module.exports = passwordPromptCallback;