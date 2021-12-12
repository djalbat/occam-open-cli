"use strict";

const action = require("../action"),
      retrieveAccessTokenOperation = require("../operation/retrieveAccessToken");

const { LOGOUT_API_URI } = require("../uris"),
      { removeAccessToken } = require("../configuration"),
      { LOGGED_OUT_MESSAGE } = require("../messages");

function logout() {
  const uri = LOGOUT_API_URI,
        operations = [
          retrieveAccessTokenOperation
        ],
        context = {};

  action(operations, uri, (json) => {
    removeAccessToken();

    console.log(LOGGED_OUT_MESSAGE);

    process.exit();
  }, context);
}

module.exports = logout;
