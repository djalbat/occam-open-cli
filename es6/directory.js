'use strict';

const necessary = require('necessary');

const nameUtilities = require('./utilities/name');

const { pathUtilities, fileSystemUtilities } = necessary,
      { concatenatePaths } = pathUtilities,
      { isEntryDirectory } = fileSystemUtilities,
      { removeMasterDirectoryNameFromPath } = nameUtilities;

class Directory {
  constructor(path) {
    this.path = path;
  }

  getPath() {
    return this.path;
  }

  toJSON() {
    const { type } = Directory,
          path = this.path,
          json = {
            "type": type,
            "path": path
          };

    return json;
  }

  static fromJSON(json) {
    let directory = null;

    const { type } = Directory,
          typeJSON = json["type"];

    if (typeJSON === type) {  ///
      const pathJSON = json["path"],
            path = pathJSON;  ///

      directory = new Directory(path);
    }

    return directory;
  }

  static fromDirectoryPath(directoryPath, projectsDirectoryPath) {
    let directory = null;

    const absolutePath = concatenatePaths(projectsDirectoryPath, directoryPath),
          entryDirectory = isEntryDirectory(absolutePath);

    if (entryDirectory) {
      const path = directoryPath; ///

      directory = new Directory(path);
    }

    return directory;
  }

  static fromJSZipEntry(jsZipEntry, callback) {
    let directory = null;
    
    const jsZipEntryDirectory = jsZipEntry.dir; ///

    if (!jsZipEntryDirectory) {
      callback(directory);
    } else {
      const jsZipDirectory = jsZipEntry,
            jsZipDirectoryPath = jsZipDirectory.name;  ///

      let path = jsZipDirectoryPath;  ///

      path = pathWithoutTrailingSlashFromPath(path);  ///

      path = removeMasterDirectoryNameFromPath(path); ///

      directory = new Directory(path);

      callback(directory);
    }
  }
}

const type = 'Directory';

Object.assign(Directory, {
  type: type
});

module.exports = Directory;

function pathWithoutTrailingSlashFromPath(path) {
  const pathWithoutTrailingSlash = path.replace(/\/$/, '');

  return pathWithoutTrailingSlash;
}

