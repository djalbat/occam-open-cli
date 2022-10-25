"use strict";

import { pathUtilities } from "necessary";

const hiddenNameRegularExpression = /^\..+/;

const { bottommostNameFromPath } = pathUtilities;

export function isNameHiddenName(name) {
  const nameHiddenName = hiddenNameRegularExpression.test(name);

  return nameHiddenName;
}

function fileNameFromFilePath(filePath) {
  const path = filePath,  ///
        bottommostName = bottommostNameFromPath(path),
        fileName = bottommostName;  //

  return fileName;
}

export default {
  isNameHiddenName,
  fileNameFromFilePath
};
