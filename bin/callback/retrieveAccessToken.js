'use strict';

const necessary = require('necessary');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
      { readRCFile } = rc;

function retrieveAccessTokenCallback(proceed, abort, context) {
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

module.exports = retrieveAccessTokenCallback;
