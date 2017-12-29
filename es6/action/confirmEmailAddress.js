'use strict';

const action = require('../action'),
      emailAddressCallback = require('../callback/emailAddress'),
      confirmationCodeCallback = require('../callback/confirmationCode');

function confirmEmailAddress(emailAddress) {
  const confirmationCode = null,
        callbacks = [
          emailAddressCallback,
          confirmationCodeCallback
        ],
        context = {
          emailAddress: emailAddress,
          confirmationCode: confirmationCode
        },
        uri = 'confirm';

  action(callbacks, context, uri);
}

module.exports = confirmEmailAddress;
