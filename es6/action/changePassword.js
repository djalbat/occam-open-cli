'use strict';

const action = require('../action'),
      prompt = require('../prompt'),
      usernameCallback = require('../callback/username'),
      passwordCallback = require('../callback/password');

function changePassword(username) {
  const oldPassword = null,
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
        uri = 'changePassword';

  action(callbacks, context, uri);
}

module.exports = changePassword;
