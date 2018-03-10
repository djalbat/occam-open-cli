'use strict';

const necessary = require('necessary');

const action = require('../action'),
      messages = require('../messages'),
      constants = require('../constants'),
      usernamePromptCallback = require('../callback/prompt/username'),
      passwordPromptCallback = require('../callback/prompt/password'),
      emailAddressPromptCallback = require('../callback/prompt/emailAddress'),
      confirmPasswordPromptCallback = require('../callback/prompt/confirmPassword');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
      { updateRCFile } = rc,
      { REGISTER_URI } = constants,
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
          username: username,
          password: password,
          emailAddress: emailAddress
        };

  action(callbacks, uri, function(json) {
    const { success } = json;

    if (success) {
      const { accessToken } = json;

      updateRCFile({
        accessToken: accessToken
      });
      
      console.log(SUCCESSFUL_REGISTER_MESSAGE);
    } else {
      console.log(FAILED_REGISTER_MESSAGE);
    }
  }, context);
}

module.exports = register;
