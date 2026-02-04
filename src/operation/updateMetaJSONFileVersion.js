"use strict";

import { fileSystemUtilities } from "occam-file-system";
import { fileNames, metaJSONUtilities } from "occam-model";

const { loadFile, saveFile } = fileSystemUtilities,
      { META_JSON_FILE_NAME } = fileNames,
      { updateMetaJSONFileVersion } = metaJSONUtilities

export default function updateMetaJSONFileVersionOperation(proceed, abort, context) {
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
