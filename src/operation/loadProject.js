"use strict";

import { fileSystemUtilities } from "occam-file-system";

import { FAILED_PROJECT_LOAD_MESSAGE } from "../messages";

const { loadProject } = fileSystemUtilities;

export default function loadProjectOperation(proceed, abort, context) {
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
