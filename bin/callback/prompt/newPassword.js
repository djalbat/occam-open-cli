"use strict";

const necessary = require("necessary");

const messages = require("../../messages"),
      validateUtilities = require("../../utilities/validate");

const { miscellaneousUtilities } = necessary,
      { prompt } = miscellaneousUtilities,
      { validatePassword } = validateUtilities,
      { INVALID_PASSWORD_MESSAGE } = messages;

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