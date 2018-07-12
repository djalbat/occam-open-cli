'use strict';

const action = require('../action'),
      messages = require('../messages'),
      constants = require('../constants'),
      configurationUtilities = require('../utilities/configuration'),
      usernamePromptCallback = require('../callback/prompt/username'),
      passwordPromptCallback = require('../callback/prompt/password');

const { addAccessToken } = configurationUtilities,
      { LOGIN_URI } = constants,
      { FAILED_LOGIN_MESSAGE, SUCCESSFUL_LOGIN_MESSAGE } = messages;

function login(argument) {
  const username = argument,  ///
        password = null,
        uri = LOGIN_URI,
        callbacks = [
          usernamePromptCallback,
          passwordPromptCallback
        ],
        context = {
          username,
          password
        };

  action(callbacks, uri, function(json, done) {
    const { success } = json;

    if (success) {
      const { accessToken } = json;

      addAccessToken(accessToken);

      console.log(SUCCESSFUL_LOGIN_MESSAGE)
    } else {
      console.log(FAILED_LOGIN_MESSAGE);
    }

    done();
  }, context);
}

module.exports = login;
