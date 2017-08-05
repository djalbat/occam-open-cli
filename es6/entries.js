'use strict';

const necessary = require('necessary');

const File = require('./file'),
      Directory = require('./directory'),
      pathUtilities = require('./utilities/path');

const { array, async, fileSystem } = necessary,
      { first } = array,
      { readDirectory } = fileSystem,
      { combinePaths, topmostDirectoryNameFromPath } = path;

class Entries {
  constructor() {
    this.array = [];
  }

  addEntry(entry) {
    this.array.push(entry);
  }

  getRootDirectoryName() {
    let rootDirectoryName = null;
    
    const firstEntry = first(this.array); ///

    if (firstEntry !== undefined) {
      const firstEntryPath = firstEntry.getPath();

      rootDirectoryName = topmostDirectoryNameFromPath(firstEntryPath);
    }

    return rootDirectoryName;
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

    async.forEach(jsZipEntryNames, function (jsZipEntryName, index, next) {
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

  static fromRootDirectoryName(rootDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
    const entries = new Entries(),
          relativeDirectoryPath = rootDirectoryName;  ///

    entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);

    return entries;
  }
}

module.exports = Entries;

function entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
  const absoluteDirectoryPath = combinePaths(projectsDirectoryPath, relativeDirectoryPath),
        subEntryNames = readDirectory(absoluteDirectoryPath);

  subEntryNames.forEach(function(subEntryName) {
    const subEntryNameHiddenName = pathUtilities.isNameHiddenName(subEntryName);

    if (!subEntryNameHiddenName || !doNotLoadHiddenFilesAndDirectories) {
      let entry;

      const path = combinePaths(relativeDirectoryPath, subEntryName),
            directoryPath = path, ///
            directory = Directory.fromDirectoryPath(directoryPath, projectsDirectoryPath);

      if (directory !== null) {
        entry = directory;  ///

        entries.addEntry(entry);

        entriesFromRelativeDirectoryPath(entries, directoryPath, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories); ///
      } else {
        const filePath = directoryPath, //
              file = File.fromFilePath(filePath, projectsDirectoryPath);

        if (file !== null) {
          entry = file;

          entries.addEntry(entry);
        }
      }
    }
  });
}
