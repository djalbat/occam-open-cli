'use strict';

const necessary = require('necessary');

const validate = require('../../validate'),
      messages = require('../../messages');

const { miscellaneousUtilities } = necessary,
      { validateEmailAddress } = validate,
      { prompt } = miscellaneousUtilities,
      { INVALID_EMAIL_ADDRESS_MESSAGE } = messages;

function newEmailAddressPromptCallback(proceed, abort, context) {
  const hidden = false,
        description = 'New email address: ',
        errorMessage = INVALID_EMAIL_ADDRESS_MESSAGE,
        validationFunction = validateEmailAddress,  ///
        options = {
          hidden,
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (newEmailAddress) => {
    const valid = (newEmailAddress !== null);

    if (valid) {
      Object.assign(context, {
        newEmailAddress
      });

      proceed();

      return;
    }

    abort();
  });
}

module.exports = newEmailAddressPromptCallback;