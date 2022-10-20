"use strict";

import { DOUBLE_SPACE } from "../constants";

export function convertContentTabsToWhitespace(content) { return content.replace(/\t/g, DOUBLE_SPACE); } ///

export default {
  convertContentTabsToWhitespace
};
