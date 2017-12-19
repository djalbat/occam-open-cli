'use strict';

const action = require('../action'),
      prompt = require('../prompt'),
      validate = require('../validate'),
      messages = require('../messages');

const { validateUsername, validatePassword } = validate,
      { invalidUsernameMessage, invalidPasswordMessage } = messages;

function changePassword(username) {
  const oldPassword = null,
        newPassword = null,
        context = {
          username: username,
          oldPassword: oldPassword,
          newPassword: newPassword
        },
        uri = 'changePassword';

  action([
    usernameCallback,
    passwordCallback
  ], context, uri);
}

module.exports = changePassword;

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
