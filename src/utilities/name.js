"use strict";

const hiddenNameRegularExpression = /^\..+/;

export function isNameHiddenName(name) {
  const nameHiddenName = hiddenNameRegularExpression.test(name);

  return nameHiddenName;
}

export default {
  isNameHiddenName
};
