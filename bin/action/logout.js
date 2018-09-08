'use strict';

const uris = require('../uris'),
			action = require('../action'),
      messages = require('../messages'),
      configurationUtilities = require('../utilities/configuration'),
      retrieveAccessTokenCallback = require('../callback/retrieveAccessToken');

const { LOGOUT_URI } = uris,
      { LOGGED_OUT_MESSAGE } = messages,
      { removeAccessToken } = configurationUtilities;

function logout() {
  const uri = LOGOUT_URI,
        callbacks = [
          retrieveAccessTokenCallback
        ],
        context = {};

  action(callbacks, uri, function(json, done) {
    removeAccessToken();

    console.log(LOGGED_OUT_MESSAGE);

    done();
  }, context);
}

module.exports = logout;
