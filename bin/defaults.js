"use strict";

const { levels } = require("necessary");

const { EMPTY_STRING } = require("./constants");

const { INFO_LEVEL } = levels;

const DEFAULT_YES = false,
      DEFAULT_HELP = false,
      DEFAULT_HOST = "https://openmathematics.org",
      DEFAULT_TAIL = 10,
      DEFAULT_FOLLOW = false,
      DEFAULT_DRY_RUN = false,
      DEFAULT_VERSION = false,
      DEFAULT_QUIETLY = false,
      DEFAULT_HEADLESS = false,
      DEFAULT_LOG_LEVEL = INFO_LEVEL,
      DEFAULT_DEPENDENCIES = false,
      DEFAULT_SHELL_COMMANDS = EMPTY_STRING,
      DEFAULT_GITHUB_HOST_NAME = "github.com";

module.exports = {
  DEFAULT_YES,
  DEFAULT_HELP,
  DEFAULT_HOST,
  DEFAULT_TAIL,
  DEFAULT_FOLLOW,
  DEFAULT_DRY_RUN,
  DEFAULT_VERSION,
  DEFAULT_QUIETLY,
  DEFAULT_HEADLESS,
  DEFAULT_LOG_LEVEL,
  DEFAULT_DEPENDENCIES,
  DEFAULT_SHELL_COMMANDS,
  DEFAULT_GITHUB_HOST_NAME
};
