"use strict";

const post = require("../post");

const { PUBLISH_API_URI } = require("../uris");

function publishOperation(proceed, abort, context) {
  const { dryRun, logLevel, releaseName, identityToken, deflatedRelease } = context,
        uri = `${PUBLISH_API_URI}/${releaseName}`,
        json = {
          dryRun,
          logLevel,
          identityToken,
          deflatedRelease
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
