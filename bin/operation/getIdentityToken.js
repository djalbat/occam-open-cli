"use strict";

const { retrieveIdentityToken } = require("../configuration");

function getIdentityTokenOperation(proceed, abort, context) {
  const identityToken = retrieveIdentityToken();

  if (!identityToken) {
    abort();

    return;
  }

  Object.assign(context, {
    identityToken
  });

  proceed();
}

module.exports = getIdentityTokenOperation;
