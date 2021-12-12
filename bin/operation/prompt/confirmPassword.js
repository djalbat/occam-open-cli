"use strict";

const { shellUtilities } = require("necessary");

const { CONFIRM_PASSWORD_DESCRIPTION } = require("../../descriptions"),
      { PASSWORDS_DO_NOT_MATCH_MESSAGE } = require("../../messages");

const { prompt } = shellUtilities;

function confirmPasswordPromptOperation(proceed, abort, context) {
  const { password } = context,
        hidden = true,
        description = CONFIRM_PASSWORD_DESCRIPTION,
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

module.exports = confirmPasswordPromptOperation;
