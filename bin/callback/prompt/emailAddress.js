'use strict';

const necessary = require('necessary');

const validate = require('../../validate'),
      messages = require('../../messages');

const { miscellaneousUtilities } = necessary,
      { validateEmailAddress } = validate,
      { prompt } = miscellaneousUtilities,
      { INVALID_EMAIL_ADDRESS_MESSAGE } = messages;

function emailAddressPromptCallback(proceed, abort, context) {
  const { emailAddress } = context,
        errorMessage = INVALID_EMAIL_ADDRESS_MESSAGE;
  
  if (emailAddress !== null) {
    const valid = validateEmailAddress(emailAddress);

    if (valid) {
      proceed();
      
      return;
    } else {
      console.log(errorMessage);
    }
  }

  const description = 'Email address: ',
        validationFunction = validateEmailAddress,  ///
        options = {
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (emailAddress) => {
    const valid = (emailAddress !== null);

    if (valid) {
      Object.assign(context, {
        emailAddress
      });

      proceed();
      
      return;
    }

    abort();
  });
}

module.exports = emailAddressPromptCallback;
