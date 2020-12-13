"use strict";

const necessary = require("necessary");

const messages = require("../../messages");

const { miscellaneousUtilities } = necessary,
      { prompt } = miscellaneousUtilities,
      { PASSWORDS_DO_NOT_MATCH_MESSAGE } = messages;

function confirmNewPasswordPromptCallback(proceed, abort, context) {
  const { newPassword } = context,
        hidden = true,
        description = "Confirm new password: ",
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
