"use strict";

const hiddenNameRegularExpression = /^\..+/;

export function isNameHiddenName(name) {
  const nameHiddenName = hiddenNameRegularExpression.test(name)

  return nameHiddenName;
}

export function removeMasterDirectoryNameFromPath(path) {
  path = path.replace(/\-master/, "");

  return path;
}
