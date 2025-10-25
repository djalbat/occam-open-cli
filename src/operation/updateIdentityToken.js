"use strict";

import { updateIdentityToken } from "../configuration";

export default function updateIdentityTokenOperation(proceed, abort, context) {
  const { identityToken } = context;

  if (identityToken !== null) {
    updateIdentityToken(identityToken);
  }

  proceed();
}
