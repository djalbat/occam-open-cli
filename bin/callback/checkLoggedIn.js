'use strict';

const necessary = require('necessary');

const messages = require('../messages');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
      { readRCFile } = rc,
      { NOT_LOGGED_IN_MESSAGE } = messages;

function checkLoggedIn(proceed, abort, context) {
  const json = readRCFile(),
        { accessToken } = json;

  if (accessToken) {
    proceed();

    return;
  }

  console.log(NOT_LOGGED_IN_MESSAGE);

  abort();
}

module.exports = checkLoggedIn;
