"use strict";

const { shellUtilities } = require("necessary");

const { validateEmailAddress } = require("../../utilities/validate"),
      { INVALID_EMAIL_ADDRESS_MESSAGE } = require("../../messages");

const { prompt } = shellUtilities;

function newEmailAddressPromptCallback(proceed, abort, context) {
  const hidden = false,
        description = "New email address: ",
        errorMessage = INVALID_EMAIL_ADDRESS_MESSAGE,
        validationFunction = validateEmailAddress,  ///
        options = {
          hidden,
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (answer) => {
    const newEmailAddress = answer, ///
          valid = (newEmailAddress !== null);

    if (valid) {
      Object.assign(context, {
        newEmailAddress
      });

      proceed();

      return;
    }

    abort();
  });
}

module.exports = newEmailAddressPromptCallback;