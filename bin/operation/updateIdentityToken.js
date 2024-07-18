"use strict";

const { updateIdentityToken } = require("../configuration");

function updateIdentityTokenOperation(proceed, abort, context) {
  const { identityToken } = context;

  if (identityToken !== null) {
    updateIdentityToken(identityToken);
  }

  proceed();
}

module.exports = updateIdentityTokenOperation;
