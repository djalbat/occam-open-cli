"use strict";

const { NO_OPTION, YES_OPTION, HELP_OPTION, TAIL_OPTION, FOLLOW_OPTION, VERBOSE_OPTION, DRY_RUN_OPTION, VERSION_OPTION, QUIETLY_OPTION, LOG_LEVEL_OPTION } = require("./options");

const n = NO_OPTION,
      y = YES_OPTION,
      h = HELP_OPTION,
      t = TAIL_OPTION,
      f = FOLLOW_OPTION,
      x = VERBOSE_OPTION,
      d = DRY_RUN_OPTION,
      v = VERSION_OPTION,
      q = QUIETLY_OPTION,
      l = LOG_LEVEL_OPTION

module.exports = {
  n,
  y,
  h,
  t,
  f,
  x,
  d,
  v,
  q,
  l
};
