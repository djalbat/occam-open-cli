"use strict";

const { retrieveAccessToken } = require("../configuration"),
      { NOT_LOGGED_IN_MESSAGE } = require("../messages");

function retrieveAccessTokenCallback(proceed, abort, context) {
  const accessToken = retrieveAccessToken();

  if (!accessToken) {
    console.log(NOT_LOGGED_IN_MESSAGE);

    abort();

    return;
  }

  Object.assign(context, {
    accessToken
  });

  proceed();
}

module.exports = retrieveAccessTokenCallback;
