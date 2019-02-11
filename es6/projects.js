'use strict';

const necessary = require('necessary');

const Project = require('./project'),
      nameUtilities = require('./utilities/name');

const { pathUtilities, fileSystemUtilities, asynchronousUtilities } = necessary,
      { forEach } = asynchronousUtilities,
      { concatenatePaths } = pathUtilities,
      { isNameHiddenName } = nameUtilities,
      { isEntryDirectory, readDirectory } = fileSystemUtilities;

class Projects {
  constructor(array) {
    this.array = array;
  }

  getLength() {
    return this.array.length;
  }

  addProject(project) {
    this.array.push(project);
  }

  mapProject(callback) {
    return this.array.map(callback);
  }

  reduceProject(callback, initialValue) {
    return this.array.reduce(callback, initialValue);
  }

  forEachProject(callback) {
    this.array.forEach(callback);
  }

  asynchronousForEachProject(callback, done) {
    forEach(this.array, callback, done);
  }

  toJSON() {
    const json = this.array.map(function(project) {
      const projectJSON = project.toJSON();

      return projectJSON;
    });

    return json;
  }

  static fromJSON(json) {
    const array = json.map(function(json) {  ///
            const project = Project.fromJSON(json);

            return project;
          }),
          projects = new Projects(array);

    return projects;
  }

  static fromNothing() {
    const array = [],
          projects = new Projects(array);

    return projects;
  }

  static fromProjectsDirectoryPath(projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories) {
    const projects = Projects.fromNothing(),
          topmostDirectoryNames = topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, disallowHiddenFilesAndDirectories);

    topmostDirectoryNames.forEach(function(topmostDirectoryName) {
      const project = Project.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories);

      projects.addProject(project);
    });

    return projects;
  }
}

module.exports = Projects;

function topmostDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath, disallowHiddenFilesAndDirectories) {
  let topmostDirectoryNames;

  try {
    const subEntryNames = readDirectory(projectsDirectoryPath);

    topmostDirectoryNames = subEntryNames.reduce(function (topmostDirectoryNames, subEntryName) {
      const absoluteSubEntryPath = concatenatePaths(projectsDirectoryPath, subEntryName),
            subEntryNameHiddenName = isNameHiddenName(subEntryName),
            subEntryNameNotHiddenName = !subEntryNameHiddenName,
            loadHiddenFilesAndDirectories = !disallowHiddenFilesAndDirectories;

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
