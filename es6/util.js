'use strict';

const fs = require('fs');

class util {
  static subEntryNamesFromAbsoluteDirectoryPath(absoluteDirectoryPath) {
    try {
      const subEntryNames = fs.readdirSync(absoluteDirectoryPath);

      return subEntryNames;
    } catch (error) {
      return [];  ///
    }
  }

  static isDirectoryPath(absolutePath) {
    try {
      const stat = fs.statSync(absolutePath),
            directory = stat.isDirectory();

      return directory;
    } catch (error) {
      return false; ///
    }
  }

  static directoryPathFromPath(path) {
    const matches = path.match(/^(.*)\/[^\/]*$/),
          firstMatch = second(matches),
          directoryPath = firstMatch; ///

    return directoryPath;
  }

  static rootDirectoryNameFromPath(path) {
    const matches = path.match(/^([^\/]*)/),
          firstMatch = second(matches),
          rootDirectoryName = firstMatch; ///

    return rootDirectoryName;
  }

  static nameFromPath(path) {
    const matches = path.match(/^.*\/([^\/]*)$/),
          secondMatch = second(matches),
          name = secondMatch;

    return name;
  }

  static isHidden(path) {
    const name = util.nameFromPath(path),
          matches = name.match(/^\./),
          hidden = (matches !== null); ///

    return hidden;
  }

  static isPathRecognisedFilePath(path) {
    const name = util.nameFromPath(path),
          recognisedFilName = util.isRecognisedFileName(name),
          pathRecognisedFilePath = recognisedFilName; ///

    return pathRecognisedFilePath;
  }
  
  static isRecognisedFileName(fileName) {
    const florenceFileName = util.isFlorenceFileName(fileName),
          recognisedFileName = florenceFileName;
    
    return recognisedFileName;
  }

  static isFlorenceFileName(fileName) {
    const matches = fileName.match(/\.fls$/),
          florenceFileName = (matches !== null); ///
    
    return florenceFileName;
  }

  static removeMasterFromPath(path) {
    path = path.replace(/\-master/, '');
  
    return path;
  }
  
  static removeTrailingSlashFromPath(path) {
    path = path.replace(/\/$/, '');

    return path;
  }

  static combinePaths(firstPath, secondPath) {
    firstPath = util.removeTrailingSlashFromPath(firstPath);

    const combinedPath = `${firstPath}/${secondPath}`;

    return combinedPath;
  }
}

module.exports = util;

function second(array) { return array[1]; }
