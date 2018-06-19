'use strict';

const action = require('../action'),
      messages = require('../messages'),
      constants = require('../constants'),
      usernamePromptCallback = require('../callback/prompt/username'),
      passwordPromptCallback = require('../callback/prompt/password'),
      emailAddressPromptCallback = require('../callback/prompt/emailAddress'),
      confirmPasswordPromptCallback = require('../callback/prompt/confirmPassword');

const { REGISTER_URI } = constants,
      { FAILED_REGISTER_MESSAGE, SUCCESSFUL_REGISTER_MESSAGE } = messages;

function register(argument) {
  const username = argument,  ///
        password = null,
        emailAddress = null,
        uri = REGISTER_URI,
        callbacks = [
          usernamePromptCallback,
          passwordPromptCallback,
          confirmPasswordPromptCallback,
          emailAddressPromptCallback
        ],
        context = {
          username,
          password,
          emailAddress
        };

  action(callbacks, uri, function(json, done) {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_REGISTER_MESSAGE) :
        console.log(FAILED_REGISTER_MESSAGE);

    done();
  }, context);
}

module.exports = register;
