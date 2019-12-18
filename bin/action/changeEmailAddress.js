'use strict';

const uris = require('../uris'),
      action = require('../action'),
      messages = require('../messages'),
      usernamePromptCallback = require('../callback/prompt/username'),
      emailAddressPromptCallback = require('../callback/prompt/emailAddress'),
      retrieveAccessTokenCallback = require('../callback/retrieveAccessToken'),
      newEmailAddressPromptCallback = require('../callback/prompt/newEmailAddress');

const { CHANGE_EMAIL_ADDRESS_URI } = uris,
      { FAILED_CHANGE_EMAIL_ADDRESS_MESSAGE, SUCCESSFUL_CHANGE_EMAIL_ADDRESS_MESSAGE } = messages;

function changeEmailAddress(argument) {
  const username = argument,  ///
        emailAddress = null,
        uri = CHANGE_EMAIL_ADDRESS_URI,
        callbacks = [
          retrieveAccessTokenCallback,
          usernamePromptCallback,
          emailAddressPromptCallback,
          newEmailAddressPromptCallback
        ],
        context = {
          username,
          emailAddress
        };

  action(callbacks, uri, function(json, done) {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_CHANGE_EMAIL_ADDRESS_MESSAGE) :
        console.log(FAILED_CHANGE_EMAIL_ADDRESS_MESSAGE);

    done();
  }, context);
}

module.exports = changeEmailAddress;
