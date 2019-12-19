'use strict';

const necessary = require('necessary');

const validate = require('../../validate'),
      messages = require('../../messages');

const { miscellaneousUtilities } = necessary,
      { validateUsername } = validate,
      { prompt } = miscellaneousUtilities,
      { INVALID_USERNAME_MESSAGE } = messages;

function usernamePromptCallback(proceed, abort, context) {
  const { username } = context,
        errorMessage = INVALID_USERNAME_MESSAGE;

  if (username !== null) {
    const valid = validateUsername(username);

    if (valid) {
      proceed();
      
      return;
    } else {
      console.log(errorMessage);
    }
  }

  const description = 'Username: ',
        validationFunction = validateUsername,  ///
        options = {
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (username) => {
    const valid = (username !== null);

    if (valid) {
      Object.assign(context, {
        username
      });

      proceed();
      
      return;
    }

    abort();
  });
}

module.exports = usernamePromptCallback;
