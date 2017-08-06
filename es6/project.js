'use strict';

const jsZip = require('./jsZip'),
      Entries = require('./entries');

class Project {
  constructor(name, entries) {
    this.name = name;
    this.entries = entries;
  }

  toJSON() {
    const name = this.name,
          entriesJSON = this.entries.toJSON(),
          entries = entriesJSON,  ///
          json = {
            "name": name,
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
      const topmostDirectoryName = entries.getTopmostDirectoryName();

      if (topmostDirectoryName !== null) {
        const name = topmostDirectoryName;  ///
        
        project = new Project(name, entries);
      }

      callback(project);
    });
  }

  static fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
    const entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories),
          project = new Project(topmostDirectoryName, entries);

    return project;
  }
}

module.exports = Project;
