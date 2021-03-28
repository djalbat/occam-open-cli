"use strict";

const { shellUtilities } = require("necessary");

const { validatePassword } = require("../../utilities/validate"),
      { INVALID_PASSWORD_MESSAGE } = require("../../messages");

const { prompt } = shellUtilities;

function newPasswordPromptCallback(proceed, abort, context) {
  const hidden = true,
        description = "New password: ",
        errorMessage = INVALID_PASSWORD_MESSAGE,
        validationFunction = validatePassword,  ///
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
      Object.assign(context, {
        newPassword
      });

      proceed();

      return;
    }

    abort();
  });
}

module.exports = newPasswordPromptCallback;