"use strict";

import { characters } from "necessary";

const { Release, entriesUUtilities } = require("../../lib/main"); ///

const { PERIOD_CHARACTER } = characters,
      { entriesFromTopmostDirectoryName } = entriesUUtilities;

function createReleaseOperation(proceed, abort, context) {
  const { releaseName } = context,
        release = releaseFromReleaseName(releaseName);

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
        release = new Release(name, entries, versionNumber);

  return release;
}
