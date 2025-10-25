"use strict";

import post from "../post";

import { RESET_PASSWORD_API_URI } from "../uris";

export default function resetPasswordOperation(proceed, abort, context) {
  const { emailAddress } = context,
        uri = RESET_PASSWORD_API_URI,
        json = {
          emailAddress
        };

  post(uri, json, (json) => {
    const { message = null } = json;

    Object.assign(context, {
      message
    });

    proceed();
  });
}
