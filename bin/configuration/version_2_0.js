"use strict";

const { VERSION_2_0 } = require("../versions");

function migrateConfigurationToVersion_2_0(configuration) {
  const version = VERSION_2_0;

  Object.assign(configuration, {
    version
  });

  return configuration;
}

module.exports = {
  migrateConfigurationToVersion_2_0
};
