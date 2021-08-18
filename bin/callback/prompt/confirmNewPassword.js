"use strict";

const { shellUtilities } = require("necessary");

const { PASSWORDS_DO_NOT_MATCH_MESSAGE } = require("../../messages"),
      { CONFIRM_NEW_PASSWORD_DESCRIPTION } = require("../../descriptions");

const { prompt } = shellUtilities;

function confirmNewPasswordPromptCallback(proceed, abort, context) {
  const { newPassword } = context,
        hidden = true,
        description = CONFIRM_NEW_PASSWORD_DESCRIPTION,
        errorMessage = PASSWORDS_DO_NOT_MATCH_MESSAGE,
        options = {
          hidden,
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (answer) => {
    const newPassword = answer, ///
          valid = (newPassword !== null);

    if (valid) {
      proceed();
      
      return;
    }

    abort();
  });

  function validationFunction(value) {
    const valid = (value === newPassword); ///

    return valid;
  }
}

module.exports = confirmNewPasswordPromptCallback;
