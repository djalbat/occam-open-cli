"use strict";

const { fileSystemUtilities } = require("occam-file-system");

const { loadRelease } = fileSystemUtilities;

function isFileRelease(fileName) {
  const projectsDirectoryPath = process.cwd(), ///
        release = loadRelease(fileName, projectsDirectoryPath),
        fileRelease = (release !== null);

  return fileRelease;
}

module.exports = {
  isFileRelease
};
