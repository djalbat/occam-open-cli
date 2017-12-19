'use strict';

const action = require('../action'),
      prompt = require('../prompt'),
      validate = require('../validate'),
      messages = require('../messages');

const { validateUsername, validatePassword, validateEmailAddress } = validate,
      { invalidUsernameMessage, invalidPasswordMessage, invalidEmailAddressMessage, passwordsDoNoMatchMessage } = messages;

function register(username) {
  const password = null,
        emailAddress = null,
        context = {
          username: username,
          password: password,
          emailAddress: emailAddress
        },
        uri = 'register';

  action([
    usernameCallback,
    passwordCallback,
    confirmPasswordCallback,
    emailAddressCallback
  ], context, uri);
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
        errorMessage = invalidUsernameMessage,
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
        errorMessage = invalidPasswordMessage,
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
        errorMessage = passwordsDoNoMatchMessage,
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
        errorMessage = invalidEmailAddressMessage,
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
