'use strict';

const action = require('../action'),
      constants = require('../constants'),
      emailAddressPromptCallback = require('../callback/prompt/emailAddress'),
      confirmationCodePromptCallback = require('../callback/prompt/confirmationCode');

const { CONFIRM_EMAIL_ADDRESS_URI } = constants;

function confirmEmailAddress(argument) {
  const emailAddress = argument,  ///
        confirmationCode = null,
        callbacks = [
          emailAddressPromptCallback,
          confirmationCodePromptCallback
        ],
        context = {
          emailAddress: emailAddress,
          confirmationCode: confirmationCode
        },
        uri = CONFIRM_EMAIL_ADDRESS_URI;

  action(callbacks, context, uri, function(json) {

  });
}

module.exports = confirmEmailAddress;
