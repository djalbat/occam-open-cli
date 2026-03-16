"use strict";

import { fileSystemUtilities } from "occam-server";

const { loadRelease } = fileSystemUtilities;

export function isFileRelease(fileName) {
  const projectsDirectoryPath = process.cwd(), ///
        release = loadRelease(fileName, projectsDirectoryPath),
        fileRelease = (release !== null);

  return fileRelease;
}
