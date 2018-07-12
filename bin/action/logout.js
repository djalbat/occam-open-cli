'use strict';

const action = require('../action'),
      messages = require('../messages'),
      constants = require('../constants'),
      checkLoggedInCallback = require('../callback/checkLoggedIn'),
      configurationUtilities = require('../utilities/configuration');

const { LOGOUT_URI } = constants,
      { LOGGED_OUT_MESSAGE } = messages,
      { removeAccessToken } = configurationUtilities;

function logout() {
  const uri = LOGOUT_URI,
        callbacks = [
          checkLoggedInCallback
        ],
        context = {};

  action(callbacks, uri, function(json, done) {
    removeAccessToken();

    console.log(LOGGED_OUT_MESSAGE);

    done();
  }, context);
}

module.exports = logout;
