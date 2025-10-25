"use strict";

import post from "../post";

import { SIGN_IN_API_URI } from "../uris";

export default function signInOperation(proceed, abort, context) {
  const { emailAddressOrUsername, password } = context,
        uri = SIGN_IN_API_URI,
        json = {
          emailAddressOrUsername,
          password
        };

  post(uri, json, (json) => {
    const { message = null, identityToken = null } = json;

    Object.assign(context, {
      message,
      identityToken
    });

    proceed();
  });
}
