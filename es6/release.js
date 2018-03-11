'use strict';

const Entries = require('./entries');

class Release {
  constructor(name, entries) {
    this.name = name;
    this.entries = entries;
  }

  getName() {
    return this.name;
  }

  toJSON() {
    const entriesJSON = this.entries.toJSON(),
          name = this.name,
          entries = entriesJSON,  ///
          json = {
            name: name,
            entries: entries
          };

    return json;
  }

  static fromJSON(json) {
    const nameJSON = json["name"],
          entriesJSON = json["entries"],
          name = nameJSON,  ///
          entries = Entries.fromJSON(entriesJSON),
          release = new Release(name, entries);

    return release;
  }

  static fromName(name) {
    let release = null;

    try {
      const topmostDirectoryName = name, ///
            projectsDirectoryPath = '.',  ///
            doNotLoadHiddenFilesAndDirectories = true,
            entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);

      release = new Release(name, entries);
    } catch (error) {}  ///

    return release;
  }
}

module.exports = Release;
