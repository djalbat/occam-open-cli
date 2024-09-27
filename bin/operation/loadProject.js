"use strict";

const { fileSystemUtilities } = require("occam-file-system");

const { FAILED_PROJECT_LOAD_MESSAGE } = require("../messages");

const { loadProject } = fileSystemUtilities;

function loadProjectOperation(proceed, abort, context) {
  const { releaseName } = context,
        projectsDirectoryPath = process.cwd(), ///
        project = loadProject(releaseName ,projectsDirectoryPath);

  if (project === null) {
    const message = FAILED_PROJECT_LOAD_MESSAGE;  ///

    console.log(message);

    abort();

    return;
  }

  Object.assign(context, {
    project
  });

  proceed();
}

module.exports = loadProjectOperation;
