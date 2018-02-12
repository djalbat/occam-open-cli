'use strict';

const necessary = require('necessary')

const action = require('../action'),
      messages = require('../messages'),
      usernameCallback = require('../callback/username'),
      passwordCallback = require('../callback/password'),
      emailAddressCallback = require('../callback/emailAddress'),
      confirmPasswordCallback = require('../callback/confirmPassword');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
      { updateRCFile } = rc,
      { FAILED_REGISTER_MESSAGE, SUCCESSFUL_REGISTER_MESSAGE } = messages;

function register(argument) {
  const username = argument,  ///
        password = null,
        emailAddress = null,
        callbacks = [
          usernameCallback,
          passwordCallback,
          confirmPasswordCallback,
          emailAddressCallback
        ],
        context = {
          username: username,
          password: password,
          emailAddress: emailAddress
        },
        uri = 'register';

  action(callbacks, context, uri, function(json) {
    const { success, message } = json;

    if (success) {
      const { accessToken } = json;

      updateRCFile({
        accessToken: accessToken
      });
      
      console.log(SUCCESSFUL_REGISTER_MESSAGE);
    } else {
      console.log(FAILED_REGISTER_MESSAGE);

      console.log(message);
    }
  });
}

module.exports = register;
