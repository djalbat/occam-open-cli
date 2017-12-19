'use strict';

const prompt = require('../prompt'),
      validate = require('../validate'),
      messages = require('../messages');

const { validateUsername } = validate,
      { invalidUsernameMessage } = messages;

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

module.exports = usernameCallback;