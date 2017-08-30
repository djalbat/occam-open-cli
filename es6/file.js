'use strict';

const mkdirp = require('mkdirp'),
      necessary = require('necessary');

const pathUtilities = require('./utilities/path');

const { path, fileSystem } = necessary,
      { readFile, writeFile } = fileSystem,
      { removeMasterDirectoryNameFromPath } = pathUtilities,
      { concatenatePaths, topmostDirectoryPathFromPath } = path;

class File {
  constructor(path, content) {
    this.path = path;
    this.content = content;
  }

  getPath() {
    return this.path;
  }

  getContent() {
    return this.content;
  }

  toJSON() {
    const type = File.type,
          path = this.path,
          content = this.content,
          json = {
            "type": type,
            "path": path,
            "content": content
          };

    return json;
  }

  save(projectsDirectoryPath) {
    const absolutePath = concatenatePaths(projectsDirectoryPath, this.path),  ///
          topmostAbsoluteDirectoryPath = topmostDirectoryPathFromPath(absolutePath);

    mkdirp.sync(topmostAbsoluteDirectoryPath);

    writeFile(absolutePath, this.content);
  }

  static fromJSON(json) {
    const pathJSON = json["path"],
          contentJSON = json["content"],
          path = pathJSON,  ///
          content = contentJSON,  ///
          file = new File(path, content);

    return file;
  }

  static fromFilePath(filePath, projectsDirectoryPath) {
    const absolutePath = concatenatePaths(projectsDirectoryPath, filePath);

    let content;

    try {
      content = readFile(absolutePath);
    }
    catch (error) {
      content = null;
    }

    const path = filePath,  ///
          file = new File(path, content);

    return file;
  }

  static fromJSZipEntry(jsZipEntry, callback) {
    let file = null;
    
    const jsZipEntryName = jsZipEntry.name,
          jsZipEntryDirectory = jsZipEntry.dir, ///
          jsZipEntryFile = !jsZipEntryDirectory;  ///

    if (!jsZipEntryFile) {
      callback(file);
    } else {
      let path = jsZipEntryName; ///

      path = removeMasterDirectoryNameFromPath(path);

      jsZipEntry.async('string').then(function(content) {
        file = new File(path, content);

        callback(file);
      });
    }
  }
}

File.type = 'File';

module.exports = File;
