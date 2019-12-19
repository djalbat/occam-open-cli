'use strict';

const uris = require('../uris'),
      action = require('../action'),
      messages = require('../messages'),
      usernamePromptCallback = require('../callback/prompt/username');

const { RESET_PASSWORD_URI } = uris,
      { FAILED_RESET_PASSWORD_MESSAGE, SUCCESSFUL_RESET_PASSWORD_MESSAGE } = messages;

function resetPassword(argument) {
  const username = argument,  ///
        uri = RESET_PASSWORD_URI,
        callbacks = [
          usernamePromptCallback
        ],
        context = {
          username
        };

  action(callbacks, uri, (json, done) => {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_RESET_PASSWORD_MESSAGE) :
        console.log(FAILED_RESET_PASSWORD_MESSAGE);

    done();
  }, context);
}

module.exports = resetPassword;
