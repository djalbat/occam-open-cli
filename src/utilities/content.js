"use strict";

import { EMPTY_STRING, DOUBLE_SPACE } from "../constants";

export function trimDoubleQuotes(content) { return content.replace(/(^"|"$)/g, EMPTY_STRING); } ///

export function convertContentTabsToWhitespace(content) { return content.replace(/\t/g, DOUBLE_SPACE); } ///

export default {
  trimDoubleQuotes,
  convertContentTabsToWhitespace
};
