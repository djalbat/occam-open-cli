'use strict';

const necessary = require('necessary');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
      { readRCFile } = rc;

function retrieveAccessToken(proceed, abort, context) {
  const json = readRCFile(),
        { accessToken } = json;

  if (accessToken) {
    Object.assign(context, {
      accessToken: accessToken
    });

    proceed();

    return;
  }

  abort();
}

module.exports = retrieveAccessToken;
