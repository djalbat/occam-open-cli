'use strict';

const fs = require('fs');

class pathUtil {
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

  static isDirectoryEmpty(absoluteDirectoryPath) {
    const subEntryNames = subEntryNamesFromAbsoluteDirectoryPath(absoluteDirectoryPath),
          subEntryNamesLength = subEntryNames.length,
          directoryEmpty = (subEntryNamesLength === 0);
    
    return directoryEmpty;    
  }

  static isHidden(path) {
    const name = pathUtil.nameFromPath(path),
          matches = name.match(/^\./),
          hidden = (matches !== null); ///

    return hidden;
  }

  static isPathRecognisedFilePath(path) {
    const name = pathUtil.nameFromPath(path),
          recognisedFilName = pathUtil.isRecognisedFileName(name),
          pathRecognisedFilePath = recognisedFilName; ///

    return pathRecognisedFilePath;
  }
  
  static isRecognisedFileName(fileName) {
    const florenceFileName = pathUtil.isFlorenceFileName(fileName),
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
    firstPath = pathUtil.removeTrailingSlashFromPath(firstPath);

    const combinedPath = `${firstPath}/${secondPath}`;

    return combinedPath;
  }
}

module.exports = pathUtil;

function second(array) { return array[1]; }
