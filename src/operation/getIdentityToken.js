"use strict";

import { retrieveIdentityToken } from "../configuration";

export default function getIdentityTokenOperation(proceed, abort, context) {
  const identityToken = retrieveIdentityToken();

  if (!identityToken) {
    abort();

    return;
  }

  Object.assign(context, {
    identityToken
  });

  proceed();
}
