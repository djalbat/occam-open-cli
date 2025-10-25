"use strict";

import post from "../post";

import { WITHDRAW_API_URI } from "../uris";

export default function withdrawOperation(proceed, abort, context) {
  const { releaseName, identityToken } = context,
        uri = `${WITHDRAW_API_URI}/${releaseName}`,
        json = {
          identityToken
        };

  post(uri, json, (json) => {
    proceed();
  });
}
