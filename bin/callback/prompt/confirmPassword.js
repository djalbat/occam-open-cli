"use strict";

const { shellUtilities } = require("necessary");

const { PASSWORDS_DO_NOT_MATCH_MESSAGE } = require("../../messages");

const { prompt } = shellUtilities;

function confirmPasswordPromptCallback(proceed, abort, context) {
  const { password } = context,
        hidden = true,
        description = "Confirm password: ",
        errorMessage = PASSWORDS_DO_NOT_MATCH_MESSAGE,
        options = {
          hidden,
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (answer) => {
    const password = answer,  ///
          valid = (password !== null);

    if (valid) {
      proceed();
      
      return;
    }

    abort();
  });

  function validationFunction(value) {
    const valid = (value === password); ///

    return valid;
  }
}

module.exports = confirmPasswordPromptCallback;
