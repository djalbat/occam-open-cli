"use strict";

import { SIGN_OUT_MESSAGE } from "../messages";
import { removeIdentityToken } from "../configuration";

export default function signOutAction() {
  const message = SIGN_OUT_MESSAGE;

  removeIdentityToken();

  console.log(message);
}
