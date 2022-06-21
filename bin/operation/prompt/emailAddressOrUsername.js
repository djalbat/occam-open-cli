"use strict";

const { shellUtilities } = require("necessary");

const { validateEmailAddressOrUsername } = require("../../utilities/validate"),
      { EMAIL_ADDRESS_OR_USERNAME_DESCRIPTION } = require("../../descriptions"),
      { INVALID_EMAIL_ADDRESS_OR_USERNAME_MESSAGE } = require("../../messages");

const { prompt } = shellUtilities;

function emailAddressOrUsernamePromptOperation(proceed, abort, context) {
  const { emailAddressOrUsername } = context,
        errorMessage = INVALID_EMAIL_ADDRESS_OR_USERNAME_MESSAGE;
  
  if (emailAddressOrUsername !== null) {
    const valid = validateEmailAddressOrUsername(emailAddressOrUsername);

    if (valid) {
      proceed();
      
      return;
    } else {
      console.log(errorMessage);
    }
  }

  const description = EMAIL_ADDRESS_OR_USERNAME_DESCRIPTION,
        validationFunction = validateEmailAddressOrUsername,  ///
        options = {
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, (answer) => {
    const emailAddressOrUsername = answer,  ///
          valid = (emailAddressOrUsername !== null);

    if (valid) {
      Object.assign(context, {
        emailAddressOrUsername
      });

      proceed();
      
      return;
    }

    abort();
  });
}

module.exports = emailAddressOrUsernamePromptOperation;
