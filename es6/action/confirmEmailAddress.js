'use strict';

const action = require('../action'),
      prompt = require('../prompt'),
      validate = require('../validate');

const { validateEmailAddress, validateConfirmationCode } = validate;

function confirmEmailAddress(emailAddress) {
  const confirmationCode = null,
        callbacks = [
          emailAddressCallback,
          confirmationCodeCallback,
        ],
        context = {
          emailAddress: emailAddress,
          confirmationCode: confirmationCode
        },
        uri = 'confirm';

  action(callbacks, context, uri);
}

module.exports = confirmEmailAddress;

function emailAddressCallback(next, done, context) {
  const { emailAddress } = context;
  
  if (emailAddress !== null) {
    const valid = validateEmailAddress(emailAddress);

    if (valid) {
      next();
    }
  }

  const description = 'Email address: ',
        validationFunction = validateEmailAddress,
        errorMessage = 'The email address does not appear to be a valid one.',
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

      next();
    } else {
      done();
    }
  });
}

function confirmationCodeCallback(next, done, context) {
  const description = 'Confirmation code: ',
        validationFunction = validateConfirmationCode,        
        errorMessage = 'Confirmation codes consist of eight alphabetical characters.',
        attempts = 3,
        hidden = false,
        options = {
          description: description,
          validationFunction: validationFunction,
          errorMessage: errorMessage,
          attempts: attempts,
          hidden: hidden
        };

  prompt(options, function(confirmationCode) {
    const valid = (confirmationCode !== null);

    if (valid) {
      Object.assign(context, {
        confirmationCode: confirmationCode
      });

      next();
    } else {
      done();
    }
  });
}
