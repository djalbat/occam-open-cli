"use strict";

const { DOUBLE_SPACE } = require("../constants"),
      { fileNames, metaJSONUtilities, fileSystemUtilities } = require("occam-file-system");

const { loadFile, saveFile } = fileSystemUtilities,
      { META_JSON_FILE_NAME } = fileNames,
      { repositoryFromNode, dependenciesFromNode, metaJSONNodeFromMetaJSONFile } = metaJSONUtilities;

function updateVersionOperation(proceed, abort, context) {
  const { success, release } = context;

  if (success) {
    const releaseName = release.getName(),
          metaJSONFilePath = `${releaseName}/${META_JSON_FILE_NAME}`,
          projectsDirectoryPath = process.cwd(), ///
          metaJSONFile = loadFile(metaJSONFilePath, projectsDirectoryPath),
          metaJSONNode = metaJSONNodeFromMetaJSONFile(metaJSONFile),
          node = metaJSONNode,  ///
          repository = repositoryFromNode(node);

    let dependencies = dependenciesFromNode(node);

    const dependenciesJSON = dependencies.toJSON();

    dependencies = dependenciesJSON;  ///

    const { version } = context,
          metaJSON = {
            version,
            repository,
            dependencies
          },
          metaJSONString = JSON.stringify(metaJSON, null, DOUBLE_SPACE),
          content = metaJSONString, ///
          file = metaJSONFile;  ///

    file.setContent(content);

    saveFile(file, projectsDirectoryPath);
  }

  proceed();
}

module.exports = updateVersionOperation;
