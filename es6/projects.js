'use strict';

const necessary = require('necessary');

const Project = require('./project'),
      pathUtilities = require('./utilities/path');

const { path, fileSystem } = necessary,
      { concatenatePaths } = path,
      { isNameHiddenName } = pathUtilities,
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

  static fromProjectsDirectoryPath(projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories, loadValidFilesOnly) {
    const projects = new Projects(),
          topmostDirectoryNames = topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);

    topmostDirectoryNames.forEach(function(topmostDirectoryName) {
      const project = Project.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories, loadValidFilesOnly);

      projects.addProject(project);
    });

    return projects;
  }
}

module.exports = Projects;

function topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
  let topmostDirectoryNames;

  try {
    const subEntryNames = readDirectory(projectsDirectoryPath);

    topmostDirectoryNames = subEntryNames.reduce(function (topmostDirectoryNames, subEntryName) {
      const absoluteSubEntryPath = concatenatePaths(projectsDirectoryPath, subEntryName),
            subEntryNameHiddenName = isNameHiddenName(subEntryName);

      if (!subEntryNameHiddenName || !doNotLoadHiddenFilesAndDirectories) {
        const subEntryDirectory = isEntryDirectory(absoluteSubEntryPath);

        if (subEntryDirectory) {
          const topmostDirectoryName = subEntryName;  ///

          topmostDirectoryNames.push(topmostDirectoryName)
        }
      }

      return topmostDirectoryNames;
    }, []);
  } catch (error) {
    topmostDirectoryNames = [];
  }

  return topmostDirectoryNames;
}
