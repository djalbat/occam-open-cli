'use strict';

const request = require('request'),
      necessary = require('necessary');

const prompt = require('../prompt'),
      validate = require('../validate'),
      constants = require('../constants');

const { asynchronousUtilities } = necessary,
      { sequence } = asynchronousUtilities,
      { OPEN_MATHEMATICS_API_URL } = constants,
      URL = `${OPEN_MATHEMATICS_API_URL}confirm`,
      { validateEmailAddress, validateConfirmationCode } = validate;

function confirmEmailAddress(emailAddress) {
  const confirmationCode = null,
        context = {
          emailAddress: emailAddress,
          confirmationCode: confirmationCode
        },
        callbacks = [
          emailAddressCallback,
          confirmationCodeCallback,
        ];

  sequence(callbacks, function() {
    const url = URL,
          method = 'POST',
          encoding = null,
          params = {
            url : url,
            method : method,
            encoding: encoding
          };

    request(params, function(error, response) {
      console.log(context)
    });      
  }, context);
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
        hidden = true,
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
