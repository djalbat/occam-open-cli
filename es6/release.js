'use strict';

const Entries = require('./entries');

class Release {
  constructor(name, entries, versionNumber) {
    this.name = name;
    this.entries = entries;
    this.versionNumber = versionNumber;
  }

  getName() {
    return this.name;
  }

  getEntries() {
    return this.entries;
  }

  getVersionNumber() {
    return this.versionNumber;
  }

  getFiles() { return this.entries.getFiles(); }

  getDirectories() { return this.entries.getDirectories(); }

  toJSON() {
    const entriesJSON = this.entries.toJSON(),
          name = this.name,
          entries = entriesJSON,  ///
          versionNumber = this.versionNumber,
          json = {
            name,
            entries,
            versionNumber
          };

    return json;
  }

  static fromJSON(json) {
    const nameJSON = json["name"],
          entriesJSON = json["entries"],
          versionNumberJSON = json["versionNumber"],
          name = nameJSON,  ///
          entries = Entries.fromJSON(entriesJSON),
          versionNumber = versionNumberJSON,  ///
          release = new Release(name, entries, versionNumber);

    return release;
  }

  static fromName(name) {
    const topmostDirectoryName = name, ///
          projectsDirectoryPath = '.',
          loadOnlyRecognisedFiles = true,
          doNotLoadHiddenFilesAndDirectories = true,
          entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, loadOnlyRecognisedFiles, doNotLoadHiddenFilesAndDirectories),
          versionNumber = null, ///
          release = new Release(name, entries, versionNumber);

    return release;
  }
}

module.exports = Release;
