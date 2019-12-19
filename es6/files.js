'use strict';

const File = require('./file');

class Files {
  constructor(array) {
    this.array = array;
  }

  getFilePaths() {
    const filePaths = this.mapFile((file) => {
      const filePath = file.getPath();

      return filePath;
    });

    return filePaths;
  }

  addFile(file) {
    this.array.push(file);
  }

  mapFile(callback) {
    return this.array.map(callback);
  }

  someFile(callback) {
    return this.array.some(callback);
  }

  reduceFile(callback, initialValue) {
    return this.array.reduce(callback, initialValue);
  }

  forEachFile(callback) {
    this.array.forEach(callback);
  }

  findFile(callback) {
    return this.array.find(callback) || null; ///
  }

  save(projectsDirectoryPath) {
    this.array.forEach((file) => {
      file.save(projectsDirectoryPath);
    });
  }

  toJSON() {
    const filesJSON = this.array.map((file) => {
            const fileJSON = (file !== null) ?
                                file.toJSON() :
                                  null;
  
            return fileJSON;
          }),
          json = filesJSON;

    return json;
  }

  static fromJSON(json) {
    const filesJSON = json, ///
          array = [],
          files = new Files(array);
    
    filesJSON.forEach((fileJSON) => {
      const json = fileJSON,  ///
            file = File.fromJSON(json);

      files.addFile(file);
    });
    
    return files;
  }

  static fromNothing() {
    const array = [],
          files = new Files(array);

    return files;
  }

  static fromPaths(paths, projectsDirectoryPath) {
    const array = [],
          files = new Files(array);

    paths.forEach((path) => {
      const file = File.fromPath(path, projectsDirectoryPath);

      files.addFile(file);
    });

    return files;
  }
}

module.exports = Files;
