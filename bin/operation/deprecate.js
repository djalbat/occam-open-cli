"use strict";

const post = require("../post");

const { DEPRECATE_API_URI } = require("../uris");

function deprecateOperation(proceed, abort, context) {
  const { releaseName, identityToken } = context,
        uri = `${DEPRECATE_API_URI}/${releaseName}`,
        json = {
          identityToken
        };

  post(uri, json, (json) => {
    proceed();
  });
}

module.exports = deprecateOperation;
