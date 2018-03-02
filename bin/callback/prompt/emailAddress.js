'use strict';

const prompt = require('../../prompt'),
      validate = require('../../validate'),
      messages = require('../../messages');

const { validateEmailAddress } = validate,
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
        validationFunction = validateEmailAddress,
        errorMessage = INVALID_EMAIL_ADDRESS_MESSAGE,
        attempts = 3,
        hidden = false,
        options = {
          description: description,
          validationFunction: validationFunction,
          errorMessage: errorMessage,
          attempts: attempts,
          hidden: hidden
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
