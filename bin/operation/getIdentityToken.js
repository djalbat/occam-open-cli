"use strict";

const { NOT_SIGNED_IN_MESSAGE } = require("../messages"),
      { getIdentityToken } = require("../configuration");

function getIdentityTokenOperation(proceed, abort, context) {
  const identityToken = getIdentityToken();

  if (!identityToken) {
    console.log(NOT_SIGNED_IN_MESSAGE);

    abort();

    return;
  }

  Object.assign(context, {
    identityToken
  });

  proceed();
}

module.exports = getIdentityTokenOperation;
