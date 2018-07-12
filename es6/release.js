'use strict';

const Entries = require('./entries'),
      MetaJSONFile = require('./file/metaJSON');

const filePathUtilities = require('./utilities/filePath');

const { isFilePathReadmeFilePath, isFilePathMetaJSONFilePath } = filePathUtilities;

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

  getFiles() {
    const files = [];

    this.entries.forEachEntry(function(entry) {
      const entryFile = entry.isFile();

      if (entryFile) {
        const file = entry; ///

        files.push(file);
      }
    });

    return files;
  }

  getReadmeFile() { return this.getFile(isFilePathReadmeFilePath); }

  getMetaJSONFile() { return this.getFile(isFilePathMetaJSONFilePath, MetaJSONFile); }

  getFile(test, Class) {
    let foundFile = null;

    const files = this.getFiles();

    files.some(function(file) {
      const filePath = file.getPath(),
          fileFound = test(filePath);

      if (fileFound) {
        foundFile = Class ?
                      Class.fromFile(file) :
                        file;

        return true;
      }
    });

    const file = foundFile;

    return file;
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
