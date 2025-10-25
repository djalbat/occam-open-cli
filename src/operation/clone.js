"use strict";

import post from "../post";

import { CLONE_API_URI } from "../uris";

export default function cloneOperation(proceed, abort, context) {
  const { repositoryName } = context,
        releaseName = repositoryName, ///
        uri = `${CLONE_API_URI}/${releaseName}`,
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
