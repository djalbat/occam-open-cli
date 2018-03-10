'use strict';

const JSZip = require('jszip'),
      request = require('request');

const Entries = require('./entries');

class Project {
  constructor(name, entries) {
    this.name = name;
    this.entries = entries;
  }

  getName() {
    return this.name;
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
    const params = {
            method : "GET",
            url : url,
            encoding: null
          };

    request(params, function(error, response) {
      const { statusCode } = response;

      error = error || (statusCode !== 200);  ///

      if (error) {
        callback(null);

        return;
      }

      const { body } = response;

      JSZip.loadAsync(body)
        .then(function(jsZip) {
          Project.fromJSZip(jsZip, callback);
        });
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
    let project = null;

    try {
      const entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);

      project = new Project(topmostDirectoryName, entries);
    } catch(error) {}  ///

    return project;
  }
}

module.exports = Project;
