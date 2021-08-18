"use strict";

const { shellUtilities } = require("necessary");

const { validateConfirmationCode } = require("../../utilities/validate"),
      { CONFIRMATION_CODE_DESCRIPTION } = require("../../descriptions"),
      { INVALID_CONFIRMATION_CODE_MESSAGE } = require("../../messages");

const { prompt } = shellUtilities;

function confirmationCodePromptCallback(proceed, abort, context) {
  const hidden = true,
        description = CONFIRMATION_CODE_DESCRIPTION,
        errorMessage = INVALID_CONFIRMATION_CODE_MESSAGE,
        validationFunction = validateConfirmationCode,  ///
        options = {
          hidden,
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (answer) => {
    const confirmationCode = answer,  ///
          valid = (confirmationCode !== null);

    if (valid) {
      Object.assign(context, {
        confirmationCode
      });

      proceed();

      return;
    }

    abort();
  });
}

module.exports = confirmationCodePromptCallback;
