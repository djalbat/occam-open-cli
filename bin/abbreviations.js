"use strict";

const { YES_OPTION, HELP_OPTION, DRY_RUN_OPTION, VERSION_OPTION, QUIETLY_OPTION, LOG_LEVEL_OPTION } = require("./options");

const y = YES_OPTION,
      h = HELP_OPTION,
      d = DRY_RUN_OPTION,
      v = VERSION_OPTION,
      q = QUIETLY_OPTION,
      l = LOG_LEVEL_OPTION

module.exports = {
  y,
  h,
  d,
  v,
  q,
  l
};
