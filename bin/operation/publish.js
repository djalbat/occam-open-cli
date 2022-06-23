"use strict";

const post = require("../post");

const { PUBLISH_API_URI } = require("../uris");

function deprecateOperation(proceed, abort, context) {
  const { releaseName, identityToken, deflatedRelease } = context,
        uri = `${PUBLISH_API_URI}/${releaseName}`,
        json = {
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
