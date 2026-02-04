"use strict";

import { Version } from "occam-model";

import post from "../post";  1

import { PUBLISH_API_URI } from "../uris";

export default function publishOperation(proceed, abort, context) {
  const { tail, follow, dryRun, release, logLevel, releaseName, identityToken } = context,
        uri = `${PUBLISH_API_URI}/${releaseName}`,
        json = {
          tail,
          follow,
          dryRun,
          release,
          logLevel,
          identityToken
        };

  post(uri, json, (json) => {
    const { success, messages } = json

    let { version = null } = json;

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
