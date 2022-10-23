"use strict";

const { setIdentityToken } = require("../configuration");

function setIdentityTokenOperation(proceed, abort, context) {
  const { identityToken } = context;

  if (identityToken !== null) {
    setIdentityToken(identityToken);
  }

  proceed();
}

module.exports = setIdentityTokenOperation;
