'use strict';

const necessary = require('necessary');

const messages = require('../../messages');

const { miscellaneousUtilities } = necessary,
      { prompt } = miscellaneousUtilities,
      { EMAIL_ADDRESSES_DO_NOT_MATCH_MESSAGE } = messages;

function confirmNewEmailAddressPromptCallback(proceed, abort, context) {
  const { newEmailAddress } = context,
        hidden = false,
        description = 'Confirm new email address: ',
        errorMessage = EMAIL_ADDRESSES_DO_NOT_MATCH_MESSAGE,
        options = {
          hidden,
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, function(newEmailAddress) {
    const valid = (newEmailAddress !== null);

    if (valid) {
      proceed();
      
      return;
    }

    abort();
  });

  function validationFunction(value) {
    const valid = (value === newEmailAddress); ///

    return valid;
  }
}

module.exports = confirmNewEmailAddressPromptCallback;
