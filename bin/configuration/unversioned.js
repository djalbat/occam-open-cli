"use strict";

const constants = require("../constants");

const { DEFAULT_USE_SSH, DEFAULT_HOST_URL, DEFAULT_HOST_NAME_SUFFIX } = constants;

function createConfiguration() {
  const useSSH = DEFAULT_USE_SSH,
        hostURL = DEFAULT_HOST_URL,
        hostNameSuffix = DEFAULT_HOST_NAME_SUFFIX,
        defaultOptions = {
          useSSH,
          hostURL,
          hostNameSuffix
        },
        options = defaultOptions,	///
        configuration = {
          options
        };

  return configuration;
}

module.exports = {
  createConfiguration
};
