'use strict';

const messages = require('../messages'),
      configurationUtilities = require('../utilities/configuration');

const { retrieveAccessToken } = configurationUtilities,
      { NOT_LOGGED_IN_MESSAGE } = messages;

function retrieveAccessTokenCallback(proceed, abort, context) {
  const accessToken = retrieveAccessToken();

  if (!accessToken) {
    console.log(NOT_LOGGED_IN_MESSAGE);

    abort();

    return;
  }

  Object.assign(context, {
    accessToken
  });

  proceed();
}

module.exports = retrieveAccessTokenCallback;
