"use strict";

const necessary = require("necessary");

const messages = require("../../messages"),
      validateUtilities = require("../../utilities/validate");

const { miscellaneousUtilities } = necessary,
      { prompt } = miscellaneousUtilities,
      { validateEmailAddress } = validateUtilities,
      { INVALID_EMAIL_ADDRESS_MESSAGE } = messages;

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