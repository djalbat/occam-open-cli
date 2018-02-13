'use strict';

const action = require('../action'),
      prompt = require('../prompt'),
      constants = require('../constants'),
      usernameCallback = require('../callback/username'),
      passwordCallback = require('../callback/password');

const { CHANGE_PASSWORD_URI } = constants;

function changePassword(argument) {
  const username = argument,  ///
        oldPassword = null,
        newPassword = null,
        callbacks = [
          usernameCallback,
          passwordCallback
        ],
        context = {
          username: username,
          oldPassword: oldPassword,
          newPassword: newPassword
        },
        uri = CHANGE_PASSWORD_URI;

  action(callbacks, context, uri, function(json) {

  });
}

module.exports = changePassword;
