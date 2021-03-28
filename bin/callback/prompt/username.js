"use strict";

const { shellUtilities } = require("necessary");

const { validateUsername } = require("../../utilities/validate"),
      { INVALID_USERNAME_MESSAGE } = require("../../messages");

const { prompt } = shellUtilities;

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

  const description = "Username: ",
        validationFunction = validateUsername,  ///
        options = {
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (answer) => {
    const username = answer,  ///
          valid = (username !== null);

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
