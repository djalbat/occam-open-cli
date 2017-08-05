'use strict';

const necessary = require('necessary');

const Project = require('./project'),
      pathUtilities = require('./utilites/path');

const { path, fileSystem } = necessary,
      { combinePaths } = path,
      { isEntryDirectory, readDirectory } = fileSystem;

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
  const subEntryNames = readDirectory(projectsDirectoryPath),
        rootDirectoryNames = subEntryNames.reduce(function(rootDirectoryNames, subEntryName) {
          const absoluteSubEntryPath = combinePaths(projectsDirectoryPath, subEntryName),
                subEntryNameHiddenName = pathUtilities.isNameHiddenName(subEntryName);

          if (!subEntryNameHiddenName || !doNotLoadHiddenFilesAndDirectories) {
            const subEntryDirectory = isEntryDirectory(absoluteSubEntryPath);

            if (subEntryDirectory) {
              const rootDirectoryName = subEntryName;  ///

              rootDirectoryNames.push(rootDirectoryName)
            }
          }

          return rootDirectoryNames;
        }, []);

  return rootDirectoryNames;
}
