"use strict";

import post from "../post";

import { OPEN_API_URI } from "../uris";

export default function openOperation(proceed, abort, context) {
  const { releaseName } = context,
        uri = `${OPEN_API_URI}/${releaseName}`,
        json = {};

  post(uri, json, (json) => {
    const { success, releases = null } = json;

    Object.assign(context, {
      success,
      releases
    });

    if (!success) {
      abort();

      return;
    }

    proceed();
  });
}
