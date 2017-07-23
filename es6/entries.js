'use strict';

const File = require('./file'),
      async = require('./async'),
      pathUtil = require('./util/path'),
      arrayUtil = require('./util/array'),
      Directory = require('./directory');

class Entries {
  constructor() {
    this.array = [];
  }

  addEntry(entry) {
    this.array.push(entry);
  }

  getRootDirectoryName() {
    let rootDirectoryName = null;
    
    const firstEntry = arrayUtil.first(this.array); ///

    if (firstEntry !== undefined) {
      const firstEntryPath = firstEntry.getPath();

      rootDirectoryName = pathUtil.rootDirectoryNameFromPath(firstEntryPath);
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

  static fromRootDirectoryName(rootDirectoryName, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
    const entries = new Entries(),
          relativeDirectoryPath = rootDirectoryName;  ///

    entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories);

    return entries;
  }
}

module.exports = Entries;

function entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath, doNotLoadHiddenFilesAndDirectories) {
  const absoluteDirectoryPath = pathUtil.combinePaths(projectsDirectoryPath, relativeDirectoryPath),
        subEntryNames = pathUtil.subEntryNamesFromAbsoluteDirectoryPath(absoluteDirectoryPath);

  subEntryNames.forEach(function(subEntryName) {
    const subEntryNameHiddenName = pathUtil.isNameHiddenName(subEntryName);
    
    if (!doNotLoadHiddenFilesAndDirectories || !subEntryNameHiddenName) {
      let entry;

      const path = pathUtil.combinePaths(relativeDirectoryPath, subEntryName),
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
