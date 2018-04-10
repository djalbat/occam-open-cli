'use strict';

const messages = require('../messages'),
      configuration = require('../configuration');

const { retrieveAccessToken } = configuration,
      { NOT_LOGGED_IN_MESSAGE } = messages;

function checkLoggedInCallback(proceed, abort, context) {
  const accessToken = retrieveAccessToken(),
        loggedIn = !!accessToken;

  if (!loggedIn) {
    console.log(NOT_LOGGED_IN_MESSAGE);

    abort();

    return;
  }

  Object.assign(context, {
    accessToken: accessToken
  });

  proceed();
}

module.exports = checkLoggedInCallback;
