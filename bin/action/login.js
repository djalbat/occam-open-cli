'use strict';

const necessary = require('necessary');

const action = require('../action'),
      messages = require('../messages'),
      constants = require('../constants'),
      usernamePromptCallback = require('../callback/prompt/username'),
      passwordPromptCallback = require('../callback/prompt/password');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
      { updateRCFile } = rc,
      { LOGIN_URI } = constants,
      { FAILED_LOGIN_MESSAGE, SUCCESSFUL_LOGIN_MESSAGE } = messages;

function login(argument) {
  const username = argument,  ///
        password = null,
        callbacks = [
          usernamePromptCallback,
          passwordPromptCallback
        ],
        context = {
          username: username,
          password: password
        },
        uri = LOGIN_URI;
  
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
