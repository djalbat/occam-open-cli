'use strict';

const action = require('../action'),
      constants = require('../constants'),
      emailAddressCallback = require('../callback/emailAddress'),
      confirmationCodeCallback = require('../callback/confirmationCode');

const { CONFIRM_EMAIL_ADDRESS_URI } = constants;

function confirmEmailAddress(argument) {
  const emailAddress = argument,  ///
        confirmationCode = null,
        callbacks = [
          emailAddressCallback,
          confirmationCodeCallback
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
