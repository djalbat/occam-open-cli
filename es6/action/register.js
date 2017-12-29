'use strict';

const action = require('../action'),
      usernameCallback = require('../callback/username'),
      passwordCallback = require('../callback/password'),
      emailAddressCallback = require('../callback/emailAddress'),
      confirmPasswordCallback = require('../callback/confirmPassword');

function register(username) {
  const password = null,
        emailAddress = null,
        callbacks = [
          usernameCallback,
          passwordCallback,
          confirmPasswordCallback,
          emailAddressCallback
        ],
        context = {
          username: username,
          password: password,
          emailAddress: emailAddress
        },
        uri = 'register';

  action(callbacks, context, uri);
}

module.exports = register;
