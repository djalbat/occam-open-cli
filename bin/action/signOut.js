"use strict";

const { SIGN_OUT_MESSAGE } = require("../messages"),
      { removeIdentityToken } = require("../configuration");

function signOut() {
  const message = SIGN_OUT_MESSAGE;

  removeIdentityToken();

  console.log(message);

  process.exit();
}

module.exports = signOut;
