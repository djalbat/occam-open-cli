"use strict";

const post = require("../post");

const { WITHDRAW_API_URI } = require("../uris");

function withdrawOperation(proceed, abort, context) {
  const { releaseName, identityToken } = context,
        uri = `${WITHDRAW_API_URI}/${releaseName}`,
        json = {
          identityToken
        };

  post(uri, json, (json) => {
    proceed();
  });
}

module.exports = withdrawOperation;
