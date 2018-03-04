'use strict';

const necessary = require('necessary');

const messages = require('../messages');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
      { readRCFile } = rc,
      { NOT_LOGGED_IN_MESSAGE } = messages;

function checkLoggedInCallback(proceed, abort, context) {
  const json = readRCFile(),
        { accessToken } = json,
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
