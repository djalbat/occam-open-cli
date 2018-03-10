'use strict';

function clone(argument) {
  if (argument === null) {
    console.log('You need to specify a package name.')
  } else {
    const packageName = argument; ///

    console.log(`Cloning '${packageName}'...`);
  }
}

module.exports = clone;
