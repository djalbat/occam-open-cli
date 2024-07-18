"use strict";

function openDependenciesOperation(proceed, abort, context) {
  const { no } = context,
        openDependencies = !no;

  Object.assign(context, {
    openDependencies
  });

  proceed();
}

module.exports = openDependenciesOperation;
