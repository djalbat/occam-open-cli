'use strict';

const necessary = require('necessary');

const File = require('./file'),
      Directory = require('./directory'),
      pathUtilities = require('./utilities/path'),
      filePathUtilities = require('./utilities/filePath');

const { path, array, async, fileSystem } = necessary,
      { first } = array,
      { readDirectory } = fileSystem,
      { isNameHiddenName } = pathUtilities,
      { isFilePathValidFilePath } = filePathUtilities,
      { concatenatePaths, topmostDirectoryNameFromPath } = path;

class Entries {
  constructor() {
    this.array = [];
  }

  addEntry(entry) {
    this.array.push(entry);
  }

  getTopmostDirectoryName() {
    let topmostDirectoryName = null;
    
    const firstEntry = first(this.array); ///

    if (firstEntry !== undefined) {
      const firstEntryPath = firstEntry.getPath();

      topmostDirectoryName = topmostDirectoryNameFromPath(firstEntryPath);

      if (topmostDirectoryName === null) {
        topmostDirectoryName = firstEntryPath;
      }
    }

    return topmostDirectoryName;
  }

  toJSON() {
    const entriesJSON = this.array.map(function(entry) {
            const entryJSON = entry.toJSON();
  
            return entryJSON;
          }),
          json = entriesJSON; ///

    return json;
  }

  static fromJSZip(jsZip, callback) {
    const jsZipEntries = jsZip.files, ///
          jsZipEntryNames = Object.keys(jsZipEntries),
          entries = new Entries();

    function done() {
      callback(entries);
    }

    async.forEach(jsZipEntryNames, function (jsZipEntryName, next) {
      const jsZipEntry = jsZipEntries[jsZipEntryName];

      let entry;

      Directory.fromJSZipEntry(jsZipEntry, function (directory) {
        if (directory !== null) {
          entry = directory;  ///

          entries.addEntry(entry);

          next();
        } else {
          File.fromJSZipEntry(jsZipEntry, function (file) {
            if (file !== null) {
              entry = file;

              entries.addEntry(entry);
            }

            next();
          });
        }
      });
    }, done);
  }

  static fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories, loadValidFilesOnly) {
    const entries = new Entries(),
          relativeDirectoryPath = topmostDirectoryName;  ///

    entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories, loadValidFilesOnly);

    return entries;
  }
}

module.exports = Entries;

function entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories, loadValidFilesOnly) {
  const absoluteDirectoryPath = concatenatePaths(projectsDirectoryPath, relativeDirectoryPath),
        subEntryNames = readDirectory(absoluteDirectoryPath);

  subEntryNames.forEach(function(subEntryName) {
    const subEntryNameHiddenName = isNameHiddenName(subEntryName),
          subEntryNameNotHiddenName = !subEntryNameHiddenName,
          loadHiddenFilesAndDirectories = !doNotLoadHiddenFilesAndDirectories;

    if (subEntryNameNotHiddenName || loadHiddenFilesAndDirectories) {
      let entry;

      const path = concatenatePaths(relativeDirectoryPath, subEntryName),
            directoryPath = path, ///
            directory = Directory.fromDirectoryPath(directoryPath, projectsDirectoryPath);

      if (directory !== null) {
        entry = directory;  ///

        entries.addEntry(entry);

        entriesFromRelativeDirectoryPath(entries, directoryPath, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories, loadValidFilesOnly); ///
      } else {
        const filePath = directoryPath, //
              loadInvalidFiles = !loadValidFilesOnly,
              filePathValidFilePath = isFilePathValidFilePath(filePath);

        if (filePathValidFilePath || loadInvalidFiles) {
          const file = File.fromFilePath(filePath, projectsDirectoryPath);

          if (file !== null) {
            entry = file;

            entries.addEntry(entry);
          }
        }
      }
    }
  });
}
