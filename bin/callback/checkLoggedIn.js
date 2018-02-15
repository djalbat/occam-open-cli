'use strict';

const necessary = require('necessary');

const messages = require('../messages');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
      { readRCFile } = rc,
      { NOT_LOGGED_IN_MESSAGE } = messages;

function checkLoggedIn(next, done, context) {
  const json = readRCFile(),
        { accessToken } = json;

  if (accessToken) {
    next();

    return;
  }

  const abort = true;

  Object.assign(context, {
    abort: abort
  });
  
  console.log(NOT_LOGGED_IN_MESSAGE);

  done();
}

module.exports = checkLoggedIn;
