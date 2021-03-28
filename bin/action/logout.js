"use strict";

const action = require("../action"),
      retrieveAccessTokenCallback = require("../callback/retrieveAccessToken");

const { LOGOUT_URI } = require("../uris"),
      { removeAccessToken } = require("../configuration"),
      { LOGGED_OUT_MESSAGE } = require("../messages");

function logout() {
  const uri = LOGOUT_URI,
        callbacks = [
          retrieveAccessTokenCallback
        ],
        context = {};

  action(callbacks, uri, (json) => {
    removeAccessToken();

    console.log(LOGGED_OUT_MESSAGE);

    process.exit();
  }, context);
}

module.exports = logout;
