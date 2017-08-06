'use strict';

const necessary = require('necessary');

const Project = require('./project'),
      pathUtilities = require('./utilites/path');

const { path, fileSystem } = necessary,
      { concatenatePaths } = path,
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
          topmostDirectoryNames = topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);

    topmostDirectoryNames.forEach(function(topmostDirectoryName) {
      const project = Project.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);

      projects.addProject(project);
    });

    return projects;
  }
}

module.exports = Projects;

function topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
  const subEntryNames = readDirectory(projectsDirectoryPath),
        topmostDirectoryNames = subEntryNames.reduce(function(topmostDirectoryNames, subEntryName) {
          const absoluteSubEntryPath = concatenatePaths(projectsDirectoryPath, subEntryName),
                subEntryNameHiddenName = pathUtilities.isNameHiddenName(subEntryName);

          if (!subEntryNameHiddenName || !doNotLoadHiddenFilesAndDirectories) {
            const subEntryDirectory = isEntryDirectory(absoluteSubEntryPath);

            if (subEntryDirectory) {
              const topmostDirectoryName = subEntryName;  ///

              topmostDirectoryNames.push(topmostDirectoryName)
            }
          }

          return topmostDirectoryNames;
        }, []);

  return topmostDirectoryNames;
}
