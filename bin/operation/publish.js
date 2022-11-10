"use strict";

const { Version } = require("occam-file-system");

const post = require("../post");

const { PUBLISH_API_URI } = require("../uris");

function publishOperation(proceed, abort, context) {
  const { dryRun, release, logLevel, releaseName, identityToken } = context,
        uri = `${PUBLISH_API_URI}/${releaseName}`,
        json = {
          dryRun,
          release,
          logLevel,
          identityToken
        };

  post(uri, json, (json) => {
    const { success, messages } = json

    let { version } = json;

    if (version !== null) {
      const string = version;  ///

      version = Version.fromString(string);
    }

    Object.assign(context, {
      success,
      version,
      messages
    });

    proceed();
  });
}

module.exports = publishOperation;
