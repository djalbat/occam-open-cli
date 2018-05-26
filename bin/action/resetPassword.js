'use strict';

const action = require('../action'),
      messages = require('../messages'),
      constants = require('../constants'),
      usernamePromptCallback = require('../callback/prompt/username');

const { RESET_PASSWORD_URI } = constants,
      { FAILED_RESET_PASSWORD_MESSAGE, SUCCESSFUL_RESET_PASSWORD_MESSAGE } = messages;

function resetPassword(argument) {
  const username = argument,  ///
        uri = RESET_PASSWORD_URI,
        callbacks = [
          usernamePromptCallback
        ],
        context = {
          username: username
        };

  action(callbacks, uri, function(json, done) {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_RESET_PASSWORD_MESSAGE) :
        console.log(FAILED_RESET_PASSWORD_MESSAGE);

    done();
  }, context);
}

module.exports = resetPassword;
