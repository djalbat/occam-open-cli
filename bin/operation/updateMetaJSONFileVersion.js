"use strict";

const { fileSystemUtilities } = require("occam-file-system"),
      { fileNames, metaJSONUtilities } = require("occam-entities");

const { loadFile, saveFile } = fileSystemUtilities,
      { META_JSON_FILE_NAME } = fileNames,
      { updateMetaJSONFileVersion } = metaJSONUtilities

function updateMetaJSONFileVersionOperation(proceed, abort, context) {
  const { success } = context;

  if (success) {
    const { version, releaseName } = context,
          metaJSONFilePath = `${releaseName}/${META_JSON_FILE_NAME}`,
          projectsDirectoryPath = process.cwd(), ///
          metaJSONFile = loadFile(metaJSONFilePath, projectsDirectoryPath);

    updateMetaJSONFileVersion(metaJSONFile, version);

    saveFile(metaJSONFile, projectsDirectoryPath);
  }

  proceed();
}

module.exports = updateMetaJSONFileVersionOperation;
