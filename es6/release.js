'use strict';

const Project = require('./project');

class Release {
  constructor(project) {
    this.project = project;
  }

  getPackageName() {
    const projectName = this.project.getName(),
          packageName = projectName;  ///

    return packageName;
  }

  static fromPackageName(packageName) {
    let release = null;

    const topmostDirectoryName = packageName, ///
          projectsDirectoryPath = '.',  ///,
          doNotLoadHiddenFilesAndDirectories = true,
          project = Project.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);

    if (project !== null) {
      release = new Release(project);
    }

    return release;
  }
}

module.exports = Release;
