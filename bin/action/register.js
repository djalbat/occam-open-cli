'use strict';

const action = require('../action'),
      messages = require('../messages'),
      usernameCallback = require('../callback/username'),
      passwordCallback = require('../callback/password'),
      emailAddressCallback = require('../callback/emailAddress'),
      confirmPasswordCallback = require('../callback/confirmPassword');

const { FAILED_TO_REGISTER_MESSAGE } = messages;

function register(argument) {
  const username = argument,  ///
        password = null,
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

  action(callbacks, context, uri, function(success, message) {
    if (success) {

    } else {
      console.log(FAILED_TO_REGISTER_MESSAGE);

      console.log(message);
    }
  });
}

module.exports = register;
