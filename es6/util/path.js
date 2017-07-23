'use strict';

const fs = require('fs');

const arrayUtil = require('../util/array');

class pathUtil {
  static isAbsolutePathHiddenPath(absolutePath) {
    const name = pathUtil.nameFromPath(absolutePath),
          nameHiddenName = pathUtil.isNameHiddenName(name),
          absolutePathHiddenPath = nameHiddenName;  ///

    return absolutePathHiddenPath;
  }

  static isAbsolutePathDirectoryPath(absolutePath) {
    try {
      const stat = fs.statSync(absolutePath),
            directory = stat.isDirectory();

      return directory;
    } catch (error) {
      return false; ///
    }
  }

  static isAbsoluteDirectoryPathEmpty(absoluteDirectoryPath) {
    const subEntryNames = pathUtil.subEntryNamesFromAbsoluteDirectoryPath(absoluteDirectoryPath),
        subEntryNamesLength = subEntryNames.length,
        directoryEmpty = (subEntryNamesLength === 0);

    return directoryEmpty;
  }

  static isNameHiddenName(name) {
    const position = name.search(/^\..+/),
          nameHiddenName = (position !== -1);

    return nameHiddenName;
  }

  static subEntryNamesFromAbsoluteDirectoryPath(absoluteDirectoryPath) {
    try {
      const subEntryNames = fs.readdirSync(absoluteDirectoryPath);

      return subEntryNames;
    } catch (error) {
      return [];  ///
    }
  }

  static directoryPathFromPath(path) {
    const matches = path.match(/^(.*)\/[^\/]*$/),
          firstMatch = arrayUtil.second(matches),
          directoryPath = firstMatch; ///

    return directoryPath;
  }

  static rootDirectoryNameFromPath(path) {
    const matches = path.match(/^([^\/]*)/),
          firstMatch = arrayUtil.second(matches),
          rootDirectoryName = firstMatch; ///

    return rootDirectoryName;
  }

  static nameFromPath(path) {
    const matches = path.match(/^.*\/([^\/]*)$/),
          secondMatch = arrayUtil.second(matches),
          name = secondMatch;

    return name;
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
