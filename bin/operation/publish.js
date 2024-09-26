"use strict";

const { Version } = require("occam-entities");

const post = require("../post");

const { PUBLISH_API_URI } = require("../uris");

function publishOperation(proceed, abort, context) {
  const { tail, follow, verbose, dryRun, release, logLevel, releaseName, identityToken } = context,
        uri = `${PUBLISH_API_URI}/${releaseName}`,
        json = {
          tail,
          follow,
          dryRun,
          verbose,
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
