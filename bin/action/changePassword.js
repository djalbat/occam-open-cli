'use strict';

const action = require('../action'),
      prompt = require('../prompt'),
      constants = require('../constants'),
      usernamePromptCallback = require('../callback/prompt/username'),
      passwordPromptCallback = require('../callback/prompt/password');

const { CHANGE_PASSWORD_URI } = constants;

function changePassword(argument) {
  const username = argument,  ///
        oldPassword = null,
        newPassword = null,
        callbacks = [
          usernamePromptCallback,
          passwordPromptCallback
        ],
        context = {
          username: username,
          oldPassword: oldPassword,
          newPassword: newPassword
        },
        uri = CHANGE_PASSWORD_URI;

  action(callbacks, context, uri, function(json) {

  });
}

module.exports = changePassword;
