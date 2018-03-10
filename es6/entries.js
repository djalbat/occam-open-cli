'use strict';

const necessary = require('necessary');

const File = require('./file'),
      Directory = require('./directory'),
      nameUtilities = require('./utilities/name');

const { pathUtilities, arrayUtilities, asynchronousUtilities, fileSystemUtilities } = necessary,
      { first } = arrayUtilities,
      { forEach } = asynchronousUtilities,
      { readDirectory } = fileSystemUtilities,
      { isNameHiddenName } = nameUtilities,
      { concatenatePaths, topmostDirectoryNameFromPath } = pathUtilities;

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

  static fromJSON(json) {
    const entriesJSON = json, ///
          array = entriesJSON.map(function(entryJSON) {
            const json = entryJSON, ///
                  file = File.fromJSON(json),
                  directory = Directory.fromJSON(json),
                  entry = file || directory;  ///

            return entry;
          }),
          entries = new Entries(array);

    return entries;
  }

  static fromJSZip(jsZip, callback) {
    const jsZipEntries = jsZip.files, ///
          jsZipEntryNames = Object.keys(jsZipEntries),
          entries = new Entries();

    function done() {
      callback(entries);
    }

    forEach(jsZipEntryNames, function (jsZipEntryName, next) {
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

  static fromTopmostDirectoryName(topmostDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
    const entries = new Entries(),
          relativeDirectoryPath = topmostDirectoryName;  ///

    entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);

    return entries;
  }
}

module.exports = Entries;

function entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
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

        entriesFromRelativeDirectoryPath(entries, directoryPath, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories); ///
      } else {
        const filePath = directoryPath, //
              file = File.fromFilePath(filePath, projectsDirectoryPath);

        if (file !== null) {
          entry = file; ///

          entries.addEntry(entry);
        }
      }
    }
  });
}
