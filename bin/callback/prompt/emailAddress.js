"use strict";

const necessary = require("necessary");

const messages = require("../../messages"),
      validateUtilities = require("../../utilities/validate");

const { miscellaneousUtilities } = necessary,
      { prompt } = miscellaneousUtilities,
      { validateEmailAddress } = validateUtilities,
      { INVALID_EMAIL_ADDRESS_MESSAGE } = messages;

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

  const description = "Email address: ",
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
