'use strict';

const action = require('../action'),
      constants = require('../constants');

const { RECOVER_PASSWORD_URI } = constants;

function resetPassword() {
  const callbacks = [],
        context = {},
        uri = RECOVER_PASSWORD_URI;

  action(callbacks, context, uri);
}

module.exports = resetPassword;
