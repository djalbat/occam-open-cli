'use strict';

const necessary = require('necessary');

const Project = require('./project'),
      nameUtilities = require('./utilities/name');

const { pathUtilities, fileSystemUtilities } = necessary,
      { concatenatePaths } = pathUtilities,
      { isNameHiddenName } = nameUtilities,
      { isEntryDirectory, readDirectory } = fileSystemUtilities;

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
  let topmostDirectoryNames;

  try {
    const subEntryNames = readDirectory(projectsDirectoryPath);

    topmostDirectoryNames = subEntryNames.reduce(function (topmostDirectoryNames, subEntryName) {
      const absoluteSubEntryPath = concatenatePaths(projectsDirectoryPath, subEntryName),
            subEntryNameHiddenName = isNameHiddenName(subEntryName),
            subEntryNameNotHiddenName = !subEntryNameHiddenName,
            loadHiddenFilesAndDirectories = !doNotLoadHiddenFilesAndDirectories;

      if (subEntryNameNotHiddenName || loadHiddenFilesAndDirectories) {
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
