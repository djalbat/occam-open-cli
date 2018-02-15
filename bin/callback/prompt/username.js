'use strict';

const prompt = require('../../prompt'),
      validate = require('../../validate'),
      messages = require('../../messages');

const { validateUsername } = validate,
      { INVALID_USERNAME_MESSAGE } = messages;

function usernamePromptCallback(next, done, context) {
  const { username } = context;

  if (username !== null) {
    const valid = validateUsername(username);

    if (valid) {
      next();
      
      return;
    }
  }

  const description = 'Username: ',
        validationFunction = validateUsername,
        errorMessage = INVALID_USERNAME_MESSAGE,
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
      
      return;
    } 
    
    done();
  });
}

module.exports = usernamePromptCallback;