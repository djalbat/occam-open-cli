'use strict';

class pathUtilities {
  static isNameHiddenName(name) {
    const position = name.search(/^\..+/),
          bottommostNameHiddenName = (position !== -1);

    return bottommostNameHiddenName;
  }

  static removeMasterDirectoryNameFromPath(path) {
    path = path.replace(/\-master/, '');
  
    return path;
  }

  static pathWithoutTrailingSlashFromPath(path) {
    const pathWithoutTrailingSlash = path.replace(/\/$/, '');

    return pathWithoutTrailingSlash;
  }
}

module.exports = pathUtilities;
