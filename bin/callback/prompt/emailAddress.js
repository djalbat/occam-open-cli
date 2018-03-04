'use strict';

const necessary = require('necessary');

const validate = require('../../validate'),
      messages = require('../../messages');

const { miscellaneousUtilities } = necessary,
      { validateEmailAddress } = validate,
      { prompt } = miscellaneousUtilities,
      { INVALID_EMAIL_ADDRESS_MESSAGE } = messages;

function emailAddressPromptCallback(proceed, abort, context) {
  const { emailAddress } = context;
  
  if (emailAddress !== null) {
    const valid = validateEmailAddress(emailAddress);

    if (valid) {
      proceed();
      
      return;
    }
  }

  const description = 'Email address: ',
        errorMessage = INVALID_EMAIL_ADDRESS_MESSAGE,
        validationFunction = validateEmailAddress,
        options = {
          description: description,
          errorMessage: errorMessage,
          validationFunction: validationFunction
        };

  prompt(options, function(emailAddress) {
    const valid = (emailAddress !== null);

    if (valid) {
      Object.assign(context, {
        emailAddress: emailAddress
      });

      proceed();
      
      return;
    }

    abort();
  });
}

module.exports = emailAddressPromptCallback;
