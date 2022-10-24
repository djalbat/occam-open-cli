"use strict";

const { characters } = require("necessary");

const { Release, entriesUtilities } = require("../../lib/main"); ///

const { PERIOD_CHARACTER } = characters,
      { entriesFromTopmostDirectoryName } = entriesUtilities;

function createReleaseOperation(proceed, abort, context) {
  const { releaseName } = context;

  let release = null;

  try {
    release = releaseFromReleaseName(releaseName);
  } catch (error) {
    ///
  }

  if (release === null) {
    abort();

    return;
  }

  Object.assign(context, {
    release
  });

  proceed();
}

module.exports = createReleaseOperation;

function releaseFromReleaseName(releaseName) {
  const topmostDirectoryName = releaseName, ///
        projectsDirectoryPath = PERIOD_CHARACTER,
        loadOnlyRecognisedFiles = true,
        doNotLoadHiddenFilesAndDirectories = true,
        name = releaseName, ///
        entries = entriesFromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories),
        versionNumber = null, ///
        release = Release.fromNameEntriesAndVersionNumber(name, entries, versionNumber);

  return release;
}
