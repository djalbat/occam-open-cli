"use strict";

import Entries from "./entries";

import { isFilePathReadmeFilePath, isFilePathMetaJSONFilePath } from "./utilities/filePath";

export default class Release {
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

  getReadmeFile() {
    let readmeFile = null;

    const files = this.getFiles();

    files.someFile((file) => {
      const filePath = file.getPath(),
            filePathReadmeFilePath = isFilePathReadmeFilePath(filePath);

      if (filePathReadmeFilePath) {
        readmeFile = file;  ///

        return true;
      }
    });

    return readmeFile;
  }

  getMetaJSONFile() {
    let metaJSONFile = null;

    const files = this.getFiles();

    files.someFile((file) => {
      const filePath = file.getPath(),
            filePathMetaJSONFilePath = isFilePathMetaJSONFilePath(filePath);

      if (filePathMetaJSONFilePath) {
        metaJSONFile = file;  ///

        return true;
      }
    });

    return metaJSONFile;
  }

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
}
