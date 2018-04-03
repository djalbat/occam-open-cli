'use strict';

const action = require('../action'),
      messages = require('../messages'),
      constants = require('../constants'),
      configuration = require('../configuration'),
      checkLoggedInCallback = require('../callback/checkLoggedIn');

const { LOGOUT_URI } = constants,
      { LOGGED_OUT_MESSAGE } = messages,
      { removeAccessToken } = configuration;

function logout() {
  const uri = LOGOUT_URI,
        callbacks = [
          checkLoggedInCallback
        ],
        context = {};

  action(callbacks, uri, function(json) {
    removeAccessToken();

    console.log(LOGGED_OUT_MESSAGE);
  }, context);
}

module.exports = logout;
