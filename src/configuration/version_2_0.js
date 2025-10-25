"use strict";

import { VERSION_2_0 } from "../versions";

export default function migrateConfigurationToVersion_2_0(configuration) {
  const version = VERSION_2_0;

  Object.assign(configuration, {
    version
  });

  return configuration;
}
