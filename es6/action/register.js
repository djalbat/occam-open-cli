'use strict';

const request = require('request'),
      necessary = require('necessary');

const prompt = require('../prompt');

const URL = "http://localhost:8002/api/register"; ///

const { asynchronousUtilities } = necessary,
      { sequence } = asynchronousUtilities;

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
  const { username } = context,
        validationPattern = /^[a-z0-9]{2,16}(?:-[a-z0-9]{2,16}){0,4}$/,
        valid = (username !== null) && validationPattern.test(username);

  if (valid) {
    next();
  } else {
    const description = 'Username: ',
          errorMessage = 'Usernames must consist of groups of at least two and no more than sixteen numbers or lowercase letters, separated by dashes.',
          attempts = 3,
          hidden = false,
          options = {
            description: description,
            validationPattern: validationPattern,
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
}

function passwordCallback(next, done, context) {
  const description = 'Password: ',
        validationPattern = /^[a-zA-Z0-9!@#$%^&*_.,\-]{8,24}$/,
        errorMessage = 'Passwords must consist of at least eight letters, numbers or common punctuation symbols.',
        attempts = 3,
        hidden = true,
        options = {
          description: description,
          validationPattern: validationPattern,
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
        validationPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,16}$/,
        errorMessage = 'The email address does not appear to be a valid one.',
        attempts = 3,
        hidden = false,
        options = {
          description: description,
          validationPattern: validationPattern,
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
