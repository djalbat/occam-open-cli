"use strict";

const { fileNames, metaJSONUtilities, fileSystemUtilities } = require("occam-file-system");

const { PERIOD } = require("../constants");

const { loadFile, saveFile } = fileSystemUtilities,
      { META_JSON_FILE_NAME } = fileNames,
      { repositoryFromNode, dependenciesFromNode, metaJSONNodeFromMetaJSONFile } = metaJSONUtilities;

function updateVersionOperation(proceed, abort, context) {
  const { success } = context;

  if (success) {
    const { version } = context,
          path = META_JSON_FILE_NAME, ///
          projectsDirectoryPath = PERIOD,
          metaJSONFile = loadFile(path, projectsDirectoryPath),
          metaJSONNode = metaJSONNodeFromMetaJSONFile(metaJSONFile),
          node = metaJSONNode,  ///
          repository = repositoryFromNode(node),
          dependencies = dependenciesFromNode(node);

    debugger
  }

  proceed();
}

module.exports = updateVersionOperation;
