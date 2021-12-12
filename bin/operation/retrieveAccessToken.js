"use strict";

const { retrieveAccessToken } = require("../configuration"),
      { NOT_LOGGED_IN_MESSAGE } = require("../messages");

function retrieveAccessTokenOperation(proceed, abort, context) {
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

module.exports = retrieveAccessTokenOperation;
