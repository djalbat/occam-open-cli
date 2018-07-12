'use strict';

const action = require('../action'),
      messages = require('../messages'),
      constants = require('../constants'),
      emailAddressPromptCallback = require('../callback/prompt/emailAddress'),
      retrieveAccessTokenCallback = require('../callback/retrieveAccessToken');

const { RESEND_CONFIRMATION_CODE_URI } = constants,
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

  action(callbacks, uri, function(json, done) {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_RESEND_CONFIRMATION_CODE_MESSAGE) :
        console.log(FAILED_RESEND_CONFIRMATION_CODE_MESSAGE);

    done();
  }, context);
}

module.exports = resendConfirmationCode;
