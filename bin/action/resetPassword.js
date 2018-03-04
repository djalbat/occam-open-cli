'use strict';

const action = require('../action'),
      messages = require('../messages'),
      constants = require('../constants'),
      checkLoggedInCallback = require('../callback/checkLoggedIn'),
      usernamePromptCallback = require('../callback/prompt/username');

const { RESET_PASSWORD_URI } = constants,
      { FAILED_RESET_PASSWORD_MESSAGE, SUCCESSFUL_RESET_PASSWORD_MESSAGE } = messages;

function resetPassword(argument) {
  const username = argument,  ///
        callbacks = [
          checkLoggedInCallback,
          usernamePromptCallback
        ],
        context = {
          username: username
        },
        uri = RESET_PASSWORD_URI;

  action(callbacks, context, uri, function(json) {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_RESET_PASSWORD_MESSAGE) :
        console.log(FAILED_RESET_PASSWORD_MESSAGE);
  });
}

module.exports = resetPassword;
