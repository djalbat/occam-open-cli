'use strict';

function isNameHiddenName(name) {
  const position = name.search(/^\..+/),
        bottommostNameHiddenName = (position !== -1);

  return bottommostNameHiddenName;
}

function removeMasterDirectoryNameFromPath(path) {
  path = path.replace(/\-master/, '');

  return path;
}

module.exports = {
  isNameHiddenName: isNameHiddenName,
  removeMasterDirectoryNameFromPath: removeMasterDirectoryNameFromPath
};
