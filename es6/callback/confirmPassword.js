'use strict';

const prompt = require('../prompt'),
      messages = require('../messages');

const { passwordsDoNoMatchMessage } = messages;

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

module.exports = confirmPasswordCallback;
