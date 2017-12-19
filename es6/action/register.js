'use strict';

const request = require('request'),
      necessary = require('necessary');

const prompt = require('../prompt'),
      validate = require('../validate'),
      constants = require('../constants');

const { asynchronousUtilities } = necessary,
      { sequence } = asynchronousUtilities,
      { OPEN_MATHEMATICS_API_URL } = constants,
      URL = `${OPEN_MATHEMATICS_API_URL}register`,
      { validateUsername, validatePassword, validateEmailAddress } = validate;

function register(username) {
  const password = null,
        emailAddress = null,
        context = {
          username: username,
          password: password,
          emailAddress: emailAddress
        },
        callbacks = [
          usernameCallback,
          passwordCallback,
          confirmPasswordCallback,
          emailAddressCallback
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

module.exports = register;

function usernameCallback(next, done, context) {
  const { username } = context;

  if (username !== null) {
    const valid = validateUsername(username);

    if (valid) {
      next();
    }
  }

  const description = 'Username: ',
        validationFunction = validateUsername,
        errorMessage = 'Usernames must consist of groups of at least two and no more than sixteen numbers or lowercase letters, separated by dashes.',
        attempts = 3,
        hidden = false,
        options = {
          description: description,
          validationFunction: validationFunction,
          errorMessage: errorMessage,
          attempts: attempts,
          hidden: hidden
        };

  prompt(options, function(username) {
    const valid = (username !== null);

    if (valid) {
      Object.assign(context, {
        username: username
      });

      next();
    } else {
      done();
    }
  });
}

function passwordCallback(next, done, context) {
  const description = 'Password: ',
        validationFunction = validatePassword,        
        errorMessage = 'Passwords must consist of at least eight letters, numbers or common punctuation symbols.',
        attempts = 3,
        hidden = true,
        options = {
          description: description,
          validationFunction: validationFunction,
          errorMessage: errorMessage,
          attempts: attempts,
          hidden: hidden
        };

  prompt(options, function(password) {
    const valid = (password !== null);

    if (valid) {
      Object.assign(context, {
        password: password
      });

      next();
    } else {
      done();
    }
  });
}

function confirmPasswordCallback(next, done, context) {
  const { password } = context,
        description = 'Confirm password: ',
        errorMessage = 'The passwords do not match.',
        attempts = 3,
        hidden = true,
        options = {
          description: description,
          validationFunction: validationFunction,
          errorMessage: errorMessage,
          attempts: attempts,
          hidden: hidden
        };

  prompt(options, function(password) {
    const valid = (password !== null);

    if (valid) {
      next();
    } else {
      done();
    }
  });

  function validationFunction(value) {
    const valid = (value === password); ///

    return valid;
  }
}

function emailAddressCallback(next, done, context) {
  const description = 'Email address (this will be public and must be genuine): ',
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
