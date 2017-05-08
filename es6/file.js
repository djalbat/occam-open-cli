'use strict';

const fs = require('fs'),
      mkdirp = require('mkdirp');

const pathUtil = require('./util/path');

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
    const absolutePath = pathUtil.combinePaths(projectsDirectoryPath, this.path),
          absoluteDirectoryPath = pathUtil.directoryPathFromPath(absolutePath);

    mkdirp.sync(absoluteDirectoryPath);

    fs.writeFileSync(absolutePath, this.content);
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
    let content = null;
    
    const hidden = pathUtil.isHidden(filePath),
          pathRecognisedFilePath = pathUtil.isPathRecognisedFilePath(filePath);

    if (!hidden && pathRecognisedFilePath) {
      const absolutePath = pathUtil.combinePaths(projectsDirectoryPath, filePath);

      try {
        content = fs.readFileSync(absolutePath, {encoding: 'utf8'});
      }
      catch (error) {
        ///
      }

    }

    const path = filePath,  ///
          file = new File(path, content);
    
    return file;
  }

  static fromJSZipEntry(jsZipEntry, callback) {
    let file = null;
    
    const jsZipEntryName = jsZipEntry.name,
          jsZipEntryDirectory = jsZipEntry.dir, ///
          jsZipEntryNameRecognisedFileName = pathUtil.isRecognisedFileName(jsZipEntryName),
          jsZipEntryFile = !jsZipEntryDirectory && jsZipEntryNameRecognisedFileName;

    if (!jsZipEntryFile) {
      callback(file);
    } else {
      let path = jsZipEntryName; ///

      path = pathUtil.removeMasterFromPath(path);

      jsZipEntry.async('string').then(function(content) {
        file = new File(path, content);

        callback(file);
      });
    }
  }
}

File.type = 'File';

module.exports = File;
