'use strict';

const action = require('../action'),
      prompt = require('../prompt'),
      validate = require('../validate');

const { validateUsername, validatePassword, validateEmailAddress } = validate;

function register(username) {
  const password = null,
        emailAddress = null,
        callbacks = [
          usernameCallback,
          passwordCallback,
          confirmPasswordCallback,
          emailAddressCallback
        ],
        context = {
          username: username,
          password: password,
          emailAddress: emailAddress
        },
        uri = 'register';

  action(callbacks, context, uri);
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
