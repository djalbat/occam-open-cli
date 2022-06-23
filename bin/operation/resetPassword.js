"use strict";

const post = require("../post");

const { RESET_PASSWORD_API_URI } = require("../uris");

function resetPasswordOperation(proceed, abort, context) {
  const { emailAddress } = context,
        uri = RESET_PASSWORD_API_URI,
        json = {
          emailAddress
        };

  post(uri, json, (json) => {
    proceed();
  });
}

module.exports = resetPasswordOperation;
