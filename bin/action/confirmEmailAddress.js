'use strict';

const action = require('../action'),
      emailAddressCallback = require('../callback/emailAddress'),
      confirmationCodeCallback = require('../callback/confirmationCode');

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
        uri = 'confirm';

  action(callbacks, context, uri, function(json) {

  });
}

module.exports = confirmEmailAddress;
