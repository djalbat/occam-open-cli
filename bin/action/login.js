'use strict';

const necessary = require('necessary')

const action = require('../action'),
      messages = require('../messages'),
      usernameCallback = require('../callback/username'),
      passwordCallback = require('../callback/password');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
      { updateRCFile } = rc,
      { FAILED_TO_LOGIN_MESSAGE } = messages;

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
      updateRCFile({
        "blah": "blah"
      });
      
      console.log('success!')
    } else {
      console.log(FAILED_TO_LOGIN_MESSAGE);

      console.log(serverMessage);
    }
  });
}

module.exports = login;
