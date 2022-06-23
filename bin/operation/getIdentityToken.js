"use strict";

const { getIdentityToken } = require("../configuration");

function getIdentityTokenOperation(proceed, abort, context) {
  const identityToken = getIdentityToken();

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
