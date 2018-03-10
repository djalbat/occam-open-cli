'use strict';

const action = require('../action'),
      messages = require('../messages'),
      constants = require('../constants'),
      checkLoggedInCallback = require('../callback/checkLoggedIn'),
      emailAddressPromptCallback = require('../callback/prompt/emailAddress');

const { RESEND_CONFIRMATION_CODE_URI } = constants,
      { SUCCESSFUL_RESEND_CONFIRMATION_CODE_MESSAGE, FAILED_RESEND_CONFIRMATION_CODE_MESSAGE } = messages;

function resendConfirmationCode(argument) {
  const emailAddress = argument,  ///
        uri = RESEND_CONFIRMATION_CODE_URI,
        callbacks = [
          checkLoggedInCallback,
          emailAddressPromptCallback
        ],
        context = {
          emailAddress: emailAddress
        };

  action(callbacks, uri, function(json) {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_RESEND_CONFIRMATION_CODE_MESSAGE) :
        console.log(FAILED_RESEND_CONFIRMATION_CODE_MESSAGE);
  }, context);
}

module.exports = resendConfirmationCode;
