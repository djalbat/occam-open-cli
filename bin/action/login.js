'use strict';

const necessary = require('necessary')

const action = require('../action'),
      messages = require('../messages'),
      usernameCallback = require('../callback/username'),
      passwordCallback = require('../callback/password');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
      { updateRCFile } = rc,
      { failedToLoginMessage } = messages;

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
    const { success } = json;

    if (success) {
      updateRCFile({
        "blah": "blah"
      });
      
      console.log('success!')
    } else {
      console.log(failedToLoginMessage);
    }
  });
}

module.exports = login;
