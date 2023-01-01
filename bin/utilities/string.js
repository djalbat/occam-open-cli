"use strict";

const { EMPTY_STRING } = require("../constants");

function trimTrailingSlash(string) {
  string = string.replace(/\/$/, EMPTY_STRING); ///

  return string;
}

module.exports = {
  trimTrailingSlash
};
