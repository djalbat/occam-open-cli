'use strict';

const action = require('../action'),
      emailAddressCallback = require('../callback/emailAddress'),
      confirmationCodeCallback = require('../callback/confirmationCode');

function confirmEmailAddress(emailAddress) {
  const confirmationCode = null,
        context = {
          emailAddress: emailAddress,
          confirmationCode: confirmationCode
        },
        uri = 'confirm';

  action([
    emailAddressCallback,
    confirmationCodeCallback,
  ], context, uri);
}

module.exports = confirmEmailAddress;
