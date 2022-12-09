"use strict";

const { fileSystemUtilities } = require("occam-file-system");

const { loadProject } = fileSystemUtilities;

function loadProjectOperation(proceed, abort, context) {
  const { releaseName } = context,
        projectsDirectoryPath = process.cwd(), ///
        project = loadProject(releaseName ,projectsDirectoryPath);

  if (project === null) {
    abort();

    return;
  }

  Object.assign(context, {
    project
  });

  proceed();
}

module.exports = loadProjectOperation;
