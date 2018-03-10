'use strict';

const Entries = require('./entries');

class Release {
  constructor(entries, packageName) {
    this.entries = entries;
    this.packageName = packageName;
  }

  getPackageName() {
    return this.packageName;
  }

  toJSON() {
    const entriesJSON = this.entries.toJSON(),
          packageName = this.packageName,
          entries = entriesJSON,  ///
          json = {
            entries: entries,
            packageName: packageName
          };

    return json;
  }

  static fromJSON(json) {
    const entriesJSON = json["entries"],
          packageNameJSON = json["entries"],
          entries = Entries.fromJSON(entriesJSON),
          packageName = packageNameJSON,  ///
          release = new Release(entries, packageName);

    return release;
  }

  static fromPackageName(packageName) {
    let release = null;

    try {
      const topmostDirectoryName = packageName, ///
            projectsDirectoryPath = '.',  ///
            doNotLoadHiddenFilesAndDirectories = true,
            entries = Entries.fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);

      release = new Release(entries, packageName);
    } catch (error) {}  ///

    return release;
  }
}

module.exports = Release;
