'use strict';

const necessary = require('necessary');

const pathUtilities = require('./utilities/path');

const { path, fileSystem } = necessary,
      { concatenatePaths } = path,
      { isEntryDirectory } = fileSystem;

class Directory {
  constructor(path) {
    this.path = path;
  }

  getPath() {
    return this.path;
  }

  toJSON() {
    const type = Directory.type,
          path = this.path,
          json = {
            "type": type,
            "path": path
          };

    return json;
  }

  static fromJSON(json) {
    const pathJSON = json["path"],
          path = pathJSON,  ///
          directory = new Directory(path);

    return directory;
  }

  static fromDirectoryPath(directoryPath, projectsDirectoryPath) {
    let directory = null;

    const absolutePath = concatenatePaths(projectsDirectoryPath, directoryPath),
          absolutePathDirectoryPath = isEntryDirectory(absolutePath);

    if (absolutePathDirectoryPath) {
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
      const jsZipDirectory = jsZipEntry;
      
      let jsZipDirectoryPath = jsZipDirectory.name;  ///

      jsZipDirectoryPath = pathUtilities.pathWithoutTrailingSlashFromPath(jsZipDirectoryPath);  ///

      jsZipDirectoryPath = pathUtilities.removeMasterDirectoryNameFromPath(jsZipDirectoryPath); ///

      const path = jsZipDirectoryPath;  ///

      directory = new Directory(path);

      callback(directory);
    }
  }
}

Directory.type = 'Directory';

module.exports = Directory;
