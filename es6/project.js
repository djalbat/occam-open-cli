'use strict';

const jsZip = require('./jsZip'),
      Entries = require('./entries');

class Project {
  constructor(rootDirectoryName, entries) {
    this.rootDirectoryName = rootDirectoryName;
    this.entries = entries;
  }

  toJSON() {
    const rootDirectoryName = this.rootDirectoryName,
          entriesJSON = this.entries.toJSON(),
          entries = entriesJSON,  ///
          json = {
            "rootDirectoryName": rootDirectoryName,
            "entries": entries
          };

    return json;
  }

  static fromURL(url, callback) {
    jsZip.fromURL(url, function(jsZip) {
      Project.fromJSZip(jsZip, callback);
    });
  }

  static fromJSZip(jsZip, callback) {
    let project = null;

    Entries.fromJSZip(jsZip, function(entries) {
      const rootDirectoryName = entries.getRootDirectoryName();

      if (rootDirectoryName !== null) {
        project = new Project(rootDirectoryName, entries);
      }

      callback(project);
    });
  }

  static fromRootDirectoryName(rootDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
    const entries = Entries.fromRootDirectoryName(rootDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories),
          project = new Project(rootDirectoryName, entries);

    return project;
  }
}

module.exports = Project;
