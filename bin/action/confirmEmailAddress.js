'use strict';

const action = require('../action'),
      messages = require('../messages'),
      constants = require('../constants'),
      checkLoggedInCallback = require('../callback/checkLoggedIn'),
      emailAddressPromptCallback = require('../callback/prompt/emailAddress'),
      confirmationCodePromptCallback = require('../callback/prompt/confirmationCode');

const { CONFIRM_EMAIL_ADDRESS_URI } = constants,
      { FAILED_CONFIRM_EMAIL_ADDRESS_MESSAGE, SUCCESSFUL_CONFIRM_EMAIL_ADDRESS_MESSAGE } = messages;

function confirmEmailAddress(argument) {
  const emailAddress = argument,  ///
        confirmationCode = null,
        uri = CONFIRM_EMAIL_ADDRESS_URI,
        callbacks = [
          checkLoggedInCallback,
          emailAddressPromptCallback,
          confirmationCodePromptCallback
        ],
        context = {
          emailAddress: emailAddress,
          confirmationCode: confirmationCode
        };

  action(callbacks, uri, function(json) {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_CONFIRM_EMAIL_ADDRESS_MESSAGE) :
        console.log(FAILED_CONFIRM_EMAIL_ADDRESS_MESSAGE);
  }, context);
}

module.exports = confirmEmailAddress;
