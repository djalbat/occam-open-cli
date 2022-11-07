"use strict";

const { fileNames, metaJSONUtilities } = require("occam-file-system");

const { updateMetaJSONFileVersion } = metaJSONUtilities;

const { loadFile, saveFile } = fileSystemUtilities,
      { META_JSON_FILE_NAME } = fileNames;

function updateMetaJSONFileVersionOperation(proceed, abort, context) {
  const { success } = context;

  if (success) {
    const { release, version } = context,
          releaseName = release.getName(),
          metaJSONFilePath = `${releaseName}/${META_JSON_FILE_NAME}`,
          projectsDirectoryPath = process.cwd(), ///
          metaJSONFile = loadFile(metaJSONFilePath, projectsDirectoryPath);

    updateMetaJSONFileVersion(metaJSONFile, version);

    saveFile(metaJSONFile, projectsDirectoryPath);
  }

  proceed();
}

module.exports = updateMetaJSONFileVersionOperation;
