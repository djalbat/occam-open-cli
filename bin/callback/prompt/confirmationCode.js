'use strict';

const necessary = require('necessary');

const validate = require('../../validate'),
      messages = require('../../messages');

const { miscellaneousUtilities } = necessary,
      { validateConfirmationCode } = validate,
      { prompt } = miscellaneousUtilities,
      { INVALID_CONFIRMATION_CODE_MESSAGE } = messages;

function confirmationCodePromptCallback(proceed, abort, context) {
  const hidden = true,
        description = 'Confirmation code: ',
        errorMessage = INVALID_CONFIRMATION_CODE_MESSAGE,
        validationFunction = validateConfirmationCode,  ///
        options = {
          hidden,
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, function(confirmationCode) {
    const valid = (confirmationCode !== null);

    if (valid) {
      Object.assign(context, {
        confirmationCode
      });

      proceed();

      return;
    }

    abort();
  });
}

module.exports = confirmationCodePromptCallback;
