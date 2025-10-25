"use strict";

import post from "../post";

import { CREATE_ACCOUNT_API_URI } from "../uris";

export default function createAccountOperation(proceed, abort, context) {
  const { username, password, emailAddress } = context,
        uri = CREATE_ACCOUNT_API_URI,
        json = {
          username,
          password,
          emailAddress
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
