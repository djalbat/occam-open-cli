"use strict";

const { SIGN_OUT_MESSAGE } = require("../messages"),
      { removeIdentityToken } = require("../configuration");

function signOutAction() {
  const message = SIGN_OUT_MESSAGE;

  removeIdentityToken();

  console.log(message);
}

module.exports = signOutAction;
