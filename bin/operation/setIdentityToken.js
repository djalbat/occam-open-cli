"use strict";

const { setIdentityToken } = require("../configuration");

function setIdentityTokenOperation(proceed, abort, context) {
  const { identityToken } = context;

  setIdentityToken(identityToken);

  proceed();
}

module.exports = setIdentityTokenOperation;
