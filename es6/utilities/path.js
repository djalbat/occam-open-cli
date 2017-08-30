'use strict';

function isNameHiddenName(name) {
  const position = name.search(/^\..+/),
        bottommostNameHiddenName = (position !== -1);

  return bottommostNameHiddenName;
}

function pathWithoutTrailingSlashFromPath(path) {
  const pathWithoutTrailingSlash = path.replace(/\/$/, '');

  return pathWithoutTrailingSlash;
}

function removeMasterDirectoryNameFromPath(path) {
  path = path.replace(/\-master/, '');

  return path;
}

module.exports = {
  isNameHiddenName: isNameHiddenName,
  pathWithoutTrailingSlashFromPath: pathWithoutTrailingSlashFromPath,
  removeMasterDirectoryNameFromPath: removeMasterDirectoryNameFromPath
};
