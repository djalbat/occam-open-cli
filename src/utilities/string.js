"use strict";

import { EMPTY_STRING } from "../constants";

export function trimTrailingCarriageReturn(string) {
  string = string.replace(/\n$/, EMPTY_STRING); ///

  return string;
}
