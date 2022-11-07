"use strict";

const post = require("../post");

const { PUBLISH_API_URI } = require("../uris");

function publishOperation(proceed, abort, context) {
  const { dryRun, logLevel, releaseName, identityToken, zippedRelease } = context,
        uri = `${PUBLISH_API_URI}/${releaseName}`,
        json = {
          dryRun,
          logLevel,
          identityToken,
          zippedRelease
        };

  post(uri, json, (json) => {
    const { success, version, messages } = json;

    Object.assign(context, {
      success,
      version,
      messages
    });

    proceed();
  });
}

module.exports = publishOperation;
