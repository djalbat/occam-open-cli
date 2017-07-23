'use strict';

const Project = require('./project'),
      pathUtil = require('./util/path');

class Projects {
  constructor() {
    this.array = [];
  }

  addProject(project) {
    this.array.push(project);
  }

  toJSON() {
    const json = this.array.map(function(project) {
      const projectJSON = project.toJSON();

      return projectJSON;
    });

    return json;
  }

  static fromProjectsDirectoryPath(projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
    const projects = new Projects(),
          rootDirectoryNames = rootDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);

    rootDirectoryNames.forEach(function(rootDirectoryName) {
      const project = Project.fromRootDirectoryName(rootDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);

      projects.addProject(project);
    });

    return projects;
  }
}

module.exports = Projects;

function rootDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
  const subEntryNames = pathUtil.subEntryNamesFromAbsoluteDirectoryPath(projectsDirectoryPath),
        rootDirectoryNames = subEntryNames.reduce(function(rootDirectoryNames, subEntryName) {
          const absoluteSubEntryPath = pathUtil.combinePaths(projectsDirectoryPath, subEntryName),
                absoluteSubEntryPathHiddenPath = pathUtil.isAbsolutePathHiddenPath(absoluteSubEntryPath);

          if (!absoluteSubEntryPathHiddenPath || !doNotLoadHiddenFilesAndDirectories) {
            const absoluteSubEntryPathDirectoryPath = pathUtil.isAbsolutePathDirectoryPath(absoluteSubEntryPath),
                  subEntryDirectory = absoluteSubEntryPathDirectoryPath;  ///

            if (subEntryDirectory) {
              const rootDirectoryName = subEntryName;  ///

              rootDirectoryNames.push(rootDirectoryName)
            }
          }

          return rootDirectoryNames;
        }, []);

  return rootDirectoryNames;
}
