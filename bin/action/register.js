'use strict';

const action = require('../action'),
      messages = require('../messages'),
      usernameCallback = require('../callback/username'),
      passwordCallback = require('../callback/password'),
      emailAddressCallback = require('../callback/emailAddress'),
      confirmPasswordCallback = require('../callback/confirmPassword');

const { failedToRegisterMessage } = messages;

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

  action(callbacks, context, uri, function(json) {
    const { success, message } = json,
          serverMessage = message;  ///

    if (success) {

    } else {
      console.log(failedToRegisterMessage);

      console.log(serverMessage);
    }
  });
}

module.exports = register;
