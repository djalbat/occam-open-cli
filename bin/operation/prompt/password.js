"use strict";

const { shellUtilities } = require("necessary");

const { validatePassword } = require("../../utilities/validate"),
      { PASSWORD_DESCRIPTION } = require("../../descriptions"),
      { INVALID_PASSWORD_MESSAGE } = require("../../messages");

const { prompt } = shellUtilities;

function passwordPromptOperation(proceed, abort, context) {
  const hidden = true,
        description = PASSWORD_DESCRIPTION,
        errorMessage = INVALID_PASSWORD_MESSAGE,
        validationFunction = validatePassword,  ///
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
      Object.assign(context, {
        password
      });

      proceed();

      return;
    }

    abort();
  });
}

module.exports = passwordPromptOperation;