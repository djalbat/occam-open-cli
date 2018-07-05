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

  isFile() {
    const file = false;

    return file;
  }

  isDirectory() {
    const directory = true;

    return directory;
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

  static fromPath(path, projectsDirectoryPath) {
    let directory = null;

    const absolutePath = concatenatePaths(projectsDirectoryPath, path),
          entryDirectory = isEntryDirectory(absolutePath);

    if (entryDirectory) {
      directory = new Directory(path);
    }

    return directory;
  }

  static fromJSZipEntry(jsZipEntry, callback) {
    let directory = null;
    
    const { dir } = jsZipEntry,
          jsZipEntryDirectory = dir; ///

    if (!jsZipEntryDirectory) {
      callback(directory);
    } else {
      const jsZipDirectory = jsZipEntry,
            { name } = jsZipDirectory;  ///

      let path = name;  ///

      path = pathWithoutTrailingSlashFromPath(path);  ///

      path = removeMasterDirectoryNameFromPath(path); ///

      directory = new Directory(path);

      callback(directory);
    }
  }
}

const type = 'Directory';

Object.assign(Directory, {
  type
});

module.exports = Directory;

function pathWithoutTrailingSlashFromPath(path) {
  const pathWithoutTrailingSlash = path.replace(/\/$/, '');

  return pathWithoutTrailingSlash;
}

