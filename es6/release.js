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

  toJSON() {
    const entriesJSON = this.entries.toJSON(),
          name = this.name,
          entries = entriesJSON,  ///
          versionNumber = this.versionNumber,
          json = {
            name: name,
            entries: entries,
            versionNumber: versionNumber
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
    let release = null;

    try {
      const topmostDirectoryName = name, ///
            projectsDirectoryPath = '.',
            allowOnlyRecognisedFiles = true,
            disallowHiddenFilesAndDirectories = true,
            entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, allowOnlyRecognisedFiles, disallowHiddenFilesAndDirectories),
            versionNumber = null; ///

      release = new Release(name, entries, versionNumber);
    } catch (error) {}  ///

    return release;
  }
}

module.exports = Release;
