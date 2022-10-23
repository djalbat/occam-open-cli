"use strict";

const post = require("../post");

const { CREATE_ACCOUNT_API_URI } = require("../uris");

function createAccountOperation(proceed, abort, context) {
  const { username, password, emailAddress } = context,
        uri = CREATE_ACCOUNT_API_URI,
        json = {
          username,
          password,
          emailAddress
        };

  post(uri, json, (json) => {
    const { message = null, identityToken = null } = json;

    Object.assign(context, {
      message,
      identityToken
    });

    proceed();
  });
}

module.exports = createAccountOperation;
