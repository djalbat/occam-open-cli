"use strict";

const { Version } = require("occam-file-system");

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
    let { version } = json;

    const { success, messages } = json,
          string = version;  ///

    version = Version.fromString(string);

    Object.assign(context, {
      success,
      version,
      messages
    });

    proceed();
  });
}

module.exports = publishOperation;
