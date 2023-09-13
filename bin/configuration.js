"use strict";

const { versionUtilities, configurationUtilities } = require("necessary");

const { OPEN } = require("./constants"),
      { createConfiguration } = require("./configuration/version_5_1"),
      { migrateConfigurationToVersion_2_0 } = require("./configuration/version_2_0"),
      { migrateConfigurationToVersion_5_0 } = require("./configuration/version_5_0"),
      { migrateConfigurationToVersion_5_1 } = require("./configuration/version_5_1"),
      { CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE } = require("./messages"),
      { VERSION_1_5, VERSION_2_0, VERSION_5_0, VERSION_5_1 } = require("./versions");

const { rc } = configurationUtilities,
      { migrate } = versionUtilities,
      { setRCBaseExtension, checkRCFileExists, updateRCFile, writeRCFile, readRCFile } = rc;

const rcBaseExtension = OPEN;

setRCBaseExtension(rcBaseExtension);

function retrieveHost() {
  const configuration = readConfigurationFile(),
        { host } = configuration;

  return host;
}

function retrieveOptions() {
  const configuration = readConfigurationFile(),
        { options } = configuration;

  return options;
}

function retrieveShellCommands() {
  const configuration = readConfigurationFile(),
        { shellCommands } = configuration;

  return shellCommands;
}

function retrieveIdentityToken() {
  const configuration = readConfigurationFile(),
        { identityToken } = configuration;

  return identityToken;
}

function updateOptions(options) {
  updateConfigurationFile({
    options
  });
}

function updateShellCommands(shellCommands) {
  updateConfigurationFile({
    shellCommands
  });
}

function updateIdentityToken(identityToken) {
  updateConfigurationFile({
    identityToken
  });
}

function removeIdentityToken() {
  updateConfigurationFile(null, "identityToken");
}

function createConfigurationFile() {
  const configuration = createConfiguration(),
        json = configuration; ///

  writeRCFile(json);
}

function migrateConfigurationFile() {
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

function checkConfigurationFileExists() {
  const rcFileExists = checkRCFileExists(),
        configurationFileExists = rcFileExists; ///

  return configurationFileExists;
}

module.exports = {
  retrieveHost,
  retrieveOptions,
  retrieveShellCommands,
  retrieveIdentityToken,
  updateOptions,
  updateShellCommands,
  updateIdentityToken,
  removeIdentityToken,
  createConfigurationFile,
  migrateConfigurationFile,
  checkConfigurationFileExists
};

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

function assertConfigurationFileExists() {
  const configurationFileExists = checkConfigurationFileExists();

  if (!configurationFileExists) {
    console.log(CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE);

    process.exit();
  }
}
