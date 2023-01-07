"use strict";

const { levels } = require("necessary");

const { INFO_LEVEL } = levels;

const DEFAULT_NO = false,
      DEFAULT_YES = false,
      DEFAULT_HELP = false,
      DEFAULT_HOST = "https://openmathematics.org",
      DEFAULT_DRY_RUN = false,
      DEFAULT_VERSION = false,
      DEFAULT_QUIETLY = false,
      DEFAULT_LOG_LEVEL = INFO_LEVEL,
      DEFAULT_GITHUB_HOST_NAME = "github.com";

module.exports = {
  DEFAULT_NO,
  DEFAULT_YES,
  DEFAULT_HELP,
  DEFAULT_HOST,
  DEFAULT_DRY_RUN,
  DEFAULT_VERSION,
  DEFAULT_QUIETLY,
  DEFAULT_LOG_LEVEL,
  DEFAULT_GITHUB_HOST_NAME
};
