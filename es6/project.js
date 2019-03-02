'use strict';

const JSZip = require('jszip'),
      request = require('request');

const Entries = require('./entries'),
      filePathUtilities = require('./utilities/filePath');

const { isFilePathFlorenceFilePath } = filePathUtilities;

class Project {
  constructor(name, entries) {
    this.name = name;
    this.entries = entries;
  }

  getName() {
    return this.name;
  }

  getEntries() {
    return this.entries;
  }

  getFiles() { return this.entries.getFiles(); }

  getFilePaths() { return this.entries.getFilePaths(); }

  getDirectoryPaths() { return this.entries.getDirectoryPaths(); }

  getFlorenceFiles() {
    const files = this.getFiles(),
          florenceFiles = files.reduceFile(function(florenceFiles, file) {
            const filePath = file.getPath(),
                  filePathFlorenceFilePath = isFilePathFlorenceFilePath(filePath),
                  fileFlorenceFile = filePathFlorenceFilePath;  ///

            if (fileFlorenceFile) {
              const florenceFile = file;  ///

              florenceFiles.push(florenceFile);
            }

            return florenceFiles;
          }, []);

    return florenceFiles;
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

  static fromJSON(json) {
    const nameJSON = json["name"],
          entriesJSON = json["entries"];

    json = entriesJSON; ///

    const name = nameJSON,  ///
          entries = Entries.fromJSON(json),
          project = new Project(name, entries);

    return project;
  }

  static fromURL(url, callback) {
    const method = 'GET',
          encoding = null,
          options = {
            url,
            method ,
            encoding
          };

    request(options, function(error, response) {
      const { statusCode } = response;

      error = error || (statusCode !== 200);  ///

      if (error) {
        const project = null;

        callback(project);

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
    Entries.fromJSZip(jsZip, function(entries) {
      let project = null;

      const topmostDirectoryName = entries.getTopmostDirectoryName();

      if (topmostDirectoryName !== null) {
        const name = topmostDirectoryName;  ///
        
        project = new Project(name, entries);
      }

      callback(project);
    });
  }

  static fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories) {
    const entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories),
          project = new Project(topmostDirectoryName, entries);

    return project;
  }
}

module.exports = Project;
