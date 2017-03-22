'use strict';

const util = require('./util'),
      Project = require('./project');

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

  static fromProjectsDirectoryPath(projectsDirectoryPath) {
    const projects = new Projects(),
          rootDirectoryNames = rootDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath);

    rootDirectoryNames.forEach(function(rootDirectoryName) {
      const project = Project.fromRootDirectoryName(rootDirectoryName, projectsDirectoryPath);

      projects.addProject(project);
    });

    return projects;
  }
}

module.exports = Projects;

function rootDirectoryNamesFromProjectsDirectoryPath(projectsDirectoryPath) {
  const subEntryNames = util.subEntryNamesFromAbsoluteFilePath(projectsDirectoryPath),
        rootDirectoryNames = subEntryNames.reduce(function(rootDirectoryNames, subEntryName) {
          const absoluteSubEntryPath = util.combinePaths(projectsDirectoryPath, subEntryName),
                absoluteSubEntryPathDirectoryPath = util.isDirectoryPath(absoluteSubEntryPath),
                subEntryDirectory = absoluteSubEntryPathDirectoryPath,  ///
                subEntryHidden = util.isHidden(absoluteSubEntryPath);
  
          if (subEntryDirectory && !subEntryHidden) {
            const rootDirectoryName = subEntryName;  ///
  
            rootDirectoryNames.push(rootDirectoryName)
          }
  
          return rootDirectoryNames;
        }, []);

  return rootDirectoryNames;
}
