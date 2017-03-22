'use strict';

const File = require('./file');

class Files {
  constructor() {
    this.array = [];
  }
  
  addFile(file) {
    this.array.push(file);
  }

  save(projectsDirectoryPath) {
    this.array.forEach(function(file) {
      file.save(projectsDirectoryPath);
    });
  }

  toJSON() {
    const filesJSON = this.array.map(function(file) {
            const fileJSON = file.toJSON();
  
            return fileJSON;
          }),
          json = filesJSON;

    return json;
  }

  static fromJSON(json) {
    const filesJSON = json, ///
          files = new Files();
    
    filesJSON.forEach(function(fileJSON) {
      const file = File.fromJSON(fileJSON);

      files.addFile(file);
    });
    
    return files;
  }

  static fromFilePaths(filePaths, projectsDirectoryPath) {
    const files = new Files();

    filePaths.forEach(function(filePath) {
      const file = File.fromFilePath(filePath, projectsDirectoryPath);

      files.addFile(file);
    });

    return files;
  }
}

module.exports = Files;
