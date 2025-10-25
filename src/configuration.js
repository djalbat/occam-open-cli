"use strict";

import { versionUtilities, configurationUtilities } from "necessary";

import { OPEN } from "./constants";
import { createConfiguration } from "./configuration/version_5_1";
import { migrateConfigurationToVersion_2_0 } from "./configuration/version_2_0";
import { migrateConfigurationToVersion_5_0 } from "./configuration/version_5_0";
import { migrateConfigurationToVersion_5_1 } from "./configuration/version_5_1";
import { CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE } from "./messages";
import { VERSION_1_5, VERSION_2_0, VERSION_5_0, VERSION_5_1 } from "./versions";

const { rc } = configurationUtilities,
      { migrate } = versionUtilities,
      { setRCBaseExtension, checkRCFileExists, updateRCFile, writeRCFile, readRCFile } = rc;

const rcBaseExtension = OPEN; ///

setRCBaseExtension(rcBaseExtension);

export function retrieveHost() {
  const configuration = readConfigurationFile(),
        { host } = configuration;

  return host;
}

export function retrieveOptions() {
  const configuration = readConfigurationFile(),
        { options } = configuration;

  return options;
}

export function retrieveShellCommands() {
  const configuration = readConfigurationFile(),
        { shellCommands } = configuration;

  return shellCommands;
}

export function retrieveIdentityToken() {
  const configuration = readConfigurationFile(),
        { identityToken } = configuration;

  return identityToken;
}

export function updateOptions(options) {
  updateConfigurationFile({
    options
  });
}

export function updateShellCommands(shellCommands) {
  updateConfigurationFile({
    shellCommands
  });
}

export function updateIdentityToken(identityToken) {
  updateConfigurationFile({
    identityToken
  });
}

export function removeIdentityToken() {
  updateConfigurationFile(null, "identityToken");
}

export function createConfigurationFile() {
  const configuration = createConfiguration(),
        json = configuration; ///

  writeRCFile(json);
}

export function migrateConfigurationFile() {
  assertConfigurationFileExists();

  let json = readRCFile();

  const migrationMap = {
          [ VERSION_1_5 ]: migrateConfigurationToVersion_2_0,
          [ VERSION_2_0 ]: migrateConfigurationToVersion_5_0,
          [ VERSION_5_0 ] :migrateConfigurationToVersion_5_1
        },
        latestVersion = VERSION_5_1;

  json = migrate(json, migrationMap, latestVersion);

  writeRCFile(json);
}

export function checkConfigurationFileExists() {
  const rcFileExists = checkRCFileExists(),
        configurationFileExists = rcFileExists; ///

  return configurationFileExists;
}

export function assertConfigurationFileExists() {
  const configurationFileExists = checkConfigurationFileExists();

  if (!configurationFileExists) {
    console.log(CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE);

    process.exit(1);
  }
}

function readConfigurationFile() {
  assertConfigurationFileExists();

  const json = readRCFile(),
        configuration = json; ///

  return configuration;
}

function writeConfigurationFile(configuration) {
  assertConfigurationFileExists();

  const json = configuration; ///

  writeRCFile(json);
}

function updateConfigurationFile(addedConfiguration, ...deleteConfigurationNames) {
  assertConfigurationFileExists();

  const addedProperties = addedConfiguration, ///
        deletedPropertyNames = deleteConfigurationNames;  ///

  updateRCFile(addedProperties, ...deletedPropertyNames);
}
