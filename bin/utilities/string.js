"use strict";

const { EMPTY_STRING } = require("../constants");

function trimTrailingSlash(string) {
  string = string.replace(/\/$/, EMPTY_STRING); ///

  return string;
}

function trimTrailingCarriageReturn(string) {
  string = string.replace(/\n$/, EMPTY_STRING); ///

  return string;
}

module.exports = {
  trimTrailingSlash,
  trimTrailingCarriageReturn
};
