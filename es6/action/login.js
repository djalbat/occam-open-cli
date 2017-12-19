'use strict';

const action = require('../action'),
      usernameCallback = require('../callback/username'),
      passwordCallback = require('../callback/password');

function login(username) {
  const password = null,
        context = {
          username: username,
          password: password
        },
        uri = 'login';

  action([
    usernameCallback,
    passwordCallback
  ], context, uri);
}

module.exports = login;
