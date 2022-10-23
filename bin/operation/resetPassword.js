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
    const { message = null } = json;

    Object.assign(context, {
      message
    });

    proceed();
  });
}

module.exports = resetPasswordOperation;
