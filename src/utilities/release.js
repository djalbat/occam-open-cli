"use strict";

import { fileSystemUtilities } from "occam-file-system";

const { loadRelease } = fileSystemUtilities;

export function isFileRelease(fileName) {
  const projectsDirectoryPath = process.cwd(), ///
        release = loadRelease(fileName, projectsDirectoryPath),
        fileRelease = (release !== null);

  return fileRelease;
}
