'use strict';

const prompt = require('../prompt'),
      validate = require('../validate'),
      messages = require('../messages');

const { validatePassword } = validate,
      { invalidPasswordMessage } = messages;

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

module.exports = passwordCallback;