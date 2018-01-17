'use strict';

const action = require('../action'),
      messages = require('../messages'),
      usernameCallback = require('../callback/username'),
      passwordCallback = require('../callback/password');

const { failedToLoginMessage } = messages;

function login(argument) {
  const username = argument,
        password = null,
        callbacks = [
          usernameCallback,
          passwordCallback
        ],
        context = {
          username: username,
          password: password
        },
        uri = 'login';
  
  action(callbacks, context, uri, function(json) {
    const { success, message } = json,
          serverMessage = message;  ///

    if (success) {
      ///
    } else {
      console.log(failedToLoginMessage);

      console.log(serverMessage);
    }
  });
}

module.exports = login;
