'use strict';

const fs = require('fs'),
      mkdirp = require('mkdirp');

const pathUtil = require('./util/path');

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

    const absolutePath = pathUtil.combinePaths(projectsDirectoryPath, directoryPath),
          absolutePathDirectoryPath = pathUtil.isAbsolutePathDirectoryPath(absolutePath);

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

      jsZipDirectoryPath = pathUtil.removeTrailingSlashFromPath(jsZipDirectoryPath);
      jsZipDirectoryPath = pathUtil.removeMasterFromPath(jsZipDirectoryPath);

      const path = jsZipDirectoryPath;  ///

      directory = new Directory(path);

      callback(directory);
    }
  }
}

Directory.type = 'Directory';

module.exports = Directory;
