"use strict";

const post = require("../post");

const { PUBLISH_API_URI } = require("../uris");

function deprecateOperation(proceed, abort, context) {
  const { logLevel, releaseName, identityToken, deflatedRelease } = context,
        uri = `${PUBLISH_API_URI}/${releaseName}`,
        json = {
          logLevel,
          identityToken,
          deflatedRelease
        };

  post(uri, json, (json) => {
    const { success } = json;

    success ?
      proceed() :
        abort();
  });
}

module.exports = deprecateOperation;
