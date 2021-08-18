"use strict";

const { shellUtilities } = require("necessary");

const { validateEmailAddress } = require("../../utilities/validate"),
      { EMAIL_ADDRESS_DESCRIPTION } = require("../../descriptions"),
      { INVALID_EMAIL_ADDRESS_MESSAGE } = require("../../messages");

const { prompt } = shellUtilities;

function emailAddressPromptCallback(proceed, abort, context) {
  const { emailAddress } = context,
        errorMessage = INVALID_EMAIL_ADDRESS_MESSAGE;
  
  if (emailAddress !== null) {
    const valid = validateEmailAddress(emailAddress);

    if (valid) {
      proceed();
      
      return;
    } else {
      console.log(errorMessage);
    }
  }

  const description = EMAIL_ADDRESS_DESCRIPTION,
        validationFunction = validateEmailAddress,  ///
        options = {
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (answer) => {
    const emailAddress = answer,  ///
          valid = (emailAddress !== null);

    if (valid) {
      Object.assign(context, {
        emailAddress
      });

      proceed();
      
      return;
    }

    abort();
  });
}

module.exports = emailAddressPromptCallback;
