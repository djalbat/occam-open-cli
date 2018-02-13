'use strict';

const action = require('../action'),
      constants = require('../constants');

const { RESEND_CONFIRMATION_CODE_URI } = constants;

function resendConfirmationCode() {
  const callbacks = [],
        context = {},
        uri = RESEND_CONFIRMATION_CODE_URI;

  action(callbacks, context, uri);
}

module.exports = resendConfirmationCode;
