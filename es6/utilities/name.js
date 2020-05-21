"use strict";

const hiddenNameRegularExpression = /^\..+/;

function isNameHiddenName(name) {
  const nameHiddenName = hiddenNameRegularExpression.test(name)

  return nameHiddenName;
}

function removeMasterDirectoryNameFromPath(path) {
  path = path.replace(/\-master/, "");

  return path;
}

module.exports = {
  isNameHiddenName,
  removeMasterDirectoryNameFromPath
};
