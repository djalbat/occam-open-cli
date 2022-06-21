"use strict";

const { NOT_SIGNED_IN_MESSAGE } = require("../messages"),
      { retrieveIdentityToken } = require("../configuration");

function retrieveIdentityTokenOperation(proceed, abort, context) {
  const identityToken = retrieveIdentityToken();

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

module.exports = retrieveIdentityTokenOperation;
