"use strict";

const action = require("../action"),
      retrieveAccessTokenOperation = require("../operation/retrieveAccessToken");

const { SIGN_OUT_API_URI } = require("../uris"),
      { removeAccessToken } = require("../configuration"),
      { SIGNED_OUT_MESSAGE } = require("../messages");

function signOut() {
  const uri = SIGN_OUT_API_URI,
        operations = [
          retrieveAccessTokenOperation
        ],
        context = {};

  action(operations, uri, (json) => {
    removeAccessToken();

    console.log(SIGNED_OUT_MESSAGE);

    process.exit();
  }, context);
}

module.exports = signOut;
