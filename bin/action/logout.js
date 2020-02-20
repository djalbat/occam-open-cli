'use strict';

const uris = require('../uris'),
      action = require('../action'),
      messages = require('../messages'),
      configuration = require('../configuration'),
      retrieveAccessTokenCallback = require('../callback/retrieveAccessToken');

const { exit } = process,
      { LOGOUT_URI } = uris,
      { removeAccessToken } = configuration,
      { LOGGED_OUT_MESSAGE } = messages;

function logout() {
  const uri = LOGOUT_URI,
        callbacks = [
          retrieveAccessTokenCallback
        ],
        context = {};

  action(callbacks, uri, (json) => {
    removeAccessToken();

    console.log(LOGGED_OUT_MESSAGE);

    exit();
  }, context);
}

module.exports = logout;
