"use strict";

const options = require("./options");

const { HELP_OPTION, VERSION_OPTION } = options;

const h = HELP_OPTION,
      v = VERSION_OPTION;

module.exports = {
  h,
  v
};
