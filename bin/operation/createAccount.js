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
    const { identityToken = null } = json;

    if (identityToken === null) {
      abort();

      return;
    }

    Object.assign(context, {
      identityToken
    });

    proceed();
  });
}

module.exports = createAccountOperation;
