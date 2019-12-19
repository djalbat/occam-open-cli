'use strict';

const uris = require('../uris'),
      action = require('../action'),
      messages = require('../messages'),
      emailAddressPromptCallback = require('../callback/prompt/emailAddress'),
      retrieveAccessTokenCallback = require('../callback/retrieveAccessToken'),
      confirmationCodePromptCallback = require('../callback/prompt/confirmationCode');

const { CONFIRM_EMAIL_ADDRESS_URI } = uris,
      { FAILED_CONFIRM_EMAIL_ADDRESS_MESSAGE, SUCCESSFUL_CONFIRM_EMAIL_ADDRESS_MESSAGE } = messages;

function confirmEmailAddress(argument) {
  const emailAddress = argument,  ///
        confirmationCode = null,
        uri = CONFIRM_EMAIL_ADDRESS_URI,
        callbacks = [
          retrieveAccessTokenCallback,
          emailAddressPromptCallback,
          confirmationCodePromptCallback
        ],
        context = {
          emailAddress,
          confirmationCode
        };

  action(callbacks, uri, (json, done) => {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_CONFIRM_EMAIL_ADDRESS_MESSAGE) :
        console.log(FAILED_CONFIRM_EMAIL_ADDRESS_MESSAGE);

    done();
  }, context);
}

module.exports = confirmEmailAddress;
