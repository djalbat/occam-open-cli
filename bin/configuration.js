"use strict";

const { configurationUtilities } = require("necessary");

const { OPEN } = require("./constants"),
      { CONFIGURATION_FILE_DOES_NOT_EXIST_MESSAGE } = require("./messages"),
      { UNVERSIONED, VERSION_1_5, CURRENT_VERSION } = require("./versions"),
      { migrateConfigurationToVersion_1_5 } = require("./configuration/version_1_5"),
      { migrateConfigurationToVersion_2_0, createConfiguration } = require("./configuration/version_2_0");

const { rc } = configurationUtilities,
      { setRCBaseExtension, checkRCFileExists, updateRCFile, writeRCFile, readRCFile } = rc;

const rcBaseExtension = OPEN;

setRCBaseExtension(rcBaseExtension);

function retrieveHostURL() {
  const configuration = readConfigurationFile(),
        { hostURL } = configuration;

  return hostURL;
}

function retrieveOptions() {
  const configuration = readConfigurationFile(),
        { options } = configuration;

  return options;
}

function retrieveAccessToken() {
  const configuration = readConfigurationFile(),
        { accessToken } = configuration;

  return accessToken || null; ///
}

function updateOptions(options) {
  updateConfigurationFile({
    options
  });
}

function addAccessToken(accessToken) {
  updateConfigurationFile({
    accessToken
  });
}

function removeAccessToken() {
  updateConfigurationFile(null, "accessToken");
}

function createConfigurationFile() {
  const configuration = createConfiguration(),
        json = configuration; ///

  writeRCFile(json);
}

function migrateConfigurationFile() {
  let version;

  let json = readRCFile();

  let configuration = json; ///

  version = configuration.version || UNVERSIONED; ///

  while (version !== CURRENT_VERSION) {
    switch (version) {
      case UNVERSIONED :
        configuration = migrateConfigurationToVersion_1_5(configuration);
        break;

      case VERSION_1_5 :
        configuration = migrateConfigurationToVersion_2_0(configuration);
        break;
    }

    version = configuration.version || UNVERSIONED; ///
  }

  json = configuration; ///

  writeRCFile(json);
}

function checkConfigurationFileExists() {
  const rcFileExists = checkRCFileExists(),
        configurationFileExists = rcFileExists; ///

  return configurationFileExists;
}

module.exports = {
  retrieveHostURL,
  retrieveOptions,
  updateOptions,
  addAccessToken,
  removeAccessToken,
  retrieveAccessToken,
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

    process.exit(1);
  }
}
