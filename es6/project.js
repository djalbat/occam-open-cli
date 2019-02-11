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

  getEntries() {
    return this.entries;
  }

  getFiles() {
    const files = this.entries.reduce(function(files, entry) {
      const entryDirectory = entry.isDirectory(),
            entryFile = !entryDirectory;

      if (entryFile) {
        const file = entry; ///

        files.push(file);
      }

      return files;
    }, []);

    return files;
  }

  getDirectories() {
    const directories = this.entries.reduce(function(directories, entry) {
      const entryDirectory = entry.isDirectory();

      if (entryDirectory) {
        const directory = entry;  ///

        directories.push(directory);
      }

      return directories;
    }, []);

    return directories;
  }

  getFilePaths() {
    const files = this.getFiles(),
          filePaths = files.map(function(file) {
            const filePath = file.getPath();

            return filePath;
          });

    return filePaths;
  }

  getDirectoryPaths() {
    const directories = this.getDirectories(),
          directoryPaths = directories.map(function(directory) {
            const directoryPath = directory.getPath();

            return directoryPath;
          });

    return directoryPaths;
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

  static fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories) {
    const entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories),
          project = new Project(topmostDirectoryName, entries);

    return project;
  }
}

module.exports = Project;
