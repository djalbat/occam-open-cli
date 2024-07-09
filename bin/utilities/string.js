"use strict";

const { EMPTY_STRING } = require("../constants");

function trimTrailingCarriageReturn(string) {
  string = string.replace(/\n$/, EMPTY_STRING); ///

  return string;
}

module.exports = {
  trimTrailingCarriageReturn
};
