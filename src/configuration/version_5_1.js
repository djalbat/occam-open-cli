"use strict";

import { VERSION_5_1 } from "../versions";
import { DEFAULT_HOST, DEFAULT_SHELL_COMMANDS } from "../defaults";

export function createConfiguration() {
  const version = VERSION_5_1,
        host = DEFAULT_HOST,
        options = {},
        shellCommands = DEFAULT_SHELL_COMMANDS,
        identityToken = null,
        configuration = {
          version,
          host,
          options,
          shellCommands,
          identityToken
        };

  return configuration;
}

export function migrateConfigurationToVersion_5_1(configuration) {
  const version = VERSION_5_1,
        shellCommands = DEFAULT_SHELL_COMMANDS;

  Object.assign(configuration, {
    version,
    shellCommands
  });

  return configuration;
}
