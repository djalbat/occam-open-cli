"use strict";

const post = require("../post");

const { SIGN_IN_API_URI } = require("../uris");

function signInOperation(proceed, abort, context) {
  const { emailAddressOrUsername, password } = context,
        uri = SIGN_IN_API_URI,
        json = {
          emailAddressOrUsername,
          password
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

module.exports = signInOperation;
