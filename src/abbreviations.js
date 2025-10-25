"use strict";

import { YES_OPTION, HELP_OPTION, TAIL_OPTION, FOLLOW_OPTION, DRY_RUN_OPTION, VERSION_OPTION, QUIETLY_OPTION, HEADLESS_OPTION, LOG_LEVEL_OPTION, DEPENDENCIES_OPTION } from "./options";

const y = YES_OPTION,
      h = HELP_OPTION,
      t = TAIL_OPTION,
      f = FOLLOW_OPTION,
      d = DRY_RUN_OPTION,
      v = VERSION_OPTION,
      q = QUIETLY_OPTION,
      x = HEADLESS_OPTION,
      l = LOG_LEVEL_OPTION,
      a = DEPENDENCIES_OPTION;

const abbreviations = {
  y,
  h,
  t,
  f,
  d,
  v,
  q,
  x,
  l,
  a
};

export default abbreviations;
