'use strict';

const action = require('../action'),
      usernameCallback = require('../callback/username'),
      passwordCallback = require('../callback/password');

function login(username) {
  const password = null,
        callbacks = [
          usernameCallback,
          passwordCallback
        ],
        context = {
          username: username,
          password: password
        },
        uri = 'login';
  
  action(callbacks, context, uri);
}

module.exports = login;
