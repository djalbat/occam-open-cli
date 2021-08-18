"use strict";

const { DEFAULT_USE_SSH, DEFAULT_HOST_URL, DEFAULT_HOST_NAME_SUFFIX } = require("../defaults");

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
