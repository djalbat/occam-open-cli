'use strict';

const action = require('../action'),
      messages = require('../messages'),
      constants = require('../constants'),
      checkLoggedIn = require('../callback/checkLoggedIn'),
      emailAddressPromptCallback = require('../callback/prompt/emailAddress'),
      confirmationCodePromptCallback = require('../callback/prompt/confirmationCode');

const { CONFIRM_EMAIL_ADDRESS_URI } = constants,
      { FAILED_CONFIRM_EMAIL_ADDRESS_MESSAGE, SUCCESSFUL_CONFIRM_EMAIL_ADDRESS_MESSAGE } = messages;

function confirmEmailAddress(argument) {
  const emailAddress = argument,  ///
        confirmationCode = null,
        callbacks = [
          checkLoggedIn,
          emailAddressPromptCallback,
          confirmationCodePromptCallback
        ],
        context = {
          emailAddress: emailAddress,
          confirmationCode: confirmationCode
        },
        uri = CONFIRM_EMAIL_ADDRESS_URI;

  action(callbacks, context, uri, function(json) {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_CONFIRM_EMAIL_ADDRESS_MESSAGE) :
        console.log(FAILED_CONFIRM_EMAIL_ADDRESS_MESSAGE);
  });
}

module.exports = confirmEmailAddress;
