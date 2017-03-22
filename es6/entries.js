'use strict';

const util = require('./util'),
      File = require('./file'),
      async = require('./async'),
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
    
    const firstEntry = first(this.array); ///

    if (firstEntry !== undefined) {
      const firstEntryPath = firstEntry.getPath();

      rootDirectoryName = util.rootDirectoryNameFromPath(firstEntryPath);
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

  static fromRootDirectoryName(rootDirectoryName, projectsDirectoryPath) {
    const entries = new Entries(),
          relativeDirectoryPath = rootDirectoryName;  ///

    entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath);

    return entries;
  }
}

module.exports = Entries;

function first(array) { return array[0]; }

function entriesFromRelativeDirectoryPath(entries, relativeDirectoryPath, projectsDirectoryPath) {
  const absoluteDirectoryPath = util.combinePaths(projectsDirectoryPath, relativeDirectoryPath),
        subEntryNames = util.subEntryNamesFromAbsoluteFilePath(absoluteDirectoryPath);

  subEntryNames.forEach(function(subEntryName) {
    let entry;
    
    const path = util.combinePaths(relativeDirectoryPath, subEntryName),
          directoryPath = path, ///
          directory = Directory.fromDirectoryPath(directoryPath, projectsDirectoryPath);

    if (directory !== null) {
      entry = directory;  ///

      entries.addEntry(entry);

      entriesFromRelativeDirectoryPath(entries, directoryPath, projectsDirectoryPath); ///
    } else {
      const filePath = directoryPath, //
            file = File.fromFilePath(filePath, projectsDirectoryPath),
            content = file.getContent();

      if (content !== null) {
        entry = file;

        entries.addEntry(entry);
      }
    }
  });
}
