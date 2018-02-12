'use strict';

const necessary = require('necessary')

const action = require('../action'),
      messages = require('../messages'),
      usernameCallback = require('../callback/username'),
      passwordCallback = require('../callback/password');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
      { updateRCFile } = rc,
      { FAILED_LOGIN_MESSAGE, SUCCESSFUL_LOGIN_MESSAGE } = messages;

function login(argument) {
  const username = argument,  ///
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
    const { success, message } = json;

    if (success) {
      const { accessToken } = json;

      updateRCFile({
        accessToken: accessToken
      });
      
      console.log(SUCCESSFUL_LOGIN_MESSAGE)
    } else {
      console.log(FAILED_LOGIN_MESSAGE);

      console.log(message);
    }
  });
}

module.exports = login;
