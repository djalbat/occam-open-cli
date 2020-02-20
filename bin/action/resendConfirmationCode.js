'use strict';

const uris = require('../uris'),
      action = require('../action'),
      messages = require('../messages'),
      emailAddressPromptCallback = require('../callback/prompt/emailAddress'),
      retrieveAccessTokenCallback = require('../callback/retrieveAccessToken');

const { exit } = process,
      { RESEND_CONFIRMATION_CODE_URI } = uris,
      { SUCCESSFUL_RESEND_CONFIRMATION_CODE_MESSAGE, FAILED_RESEND_CONFIRMATION_CODE_MESSAGE } = messages;

function resendConfirmationCode(argument) {
  const emailAddress = argument,  ///
        uri = RESEND_CONFIRMATION_CODE_URI,
        callbacks = [
          retrieveAccessTokenCallback,
          emailAddressPromptCallback
        ],
        context = {
          emailAddress
        };

  action(callbacks, uri, (json) => {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_RESEND_CONFIRMATION_CODE_MESSAGE) :
        console.log(FAILED_RESEND_CONFIRMATION_CODE_MESSAGE);
  }, context);
}

module.exports = resendConfirmationCode;
