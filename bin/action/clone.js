'use strict';

function clone(argument) {
  if (argument === null) {
    console.log('You need to specify a package name.')
  } else {
    const releaseName = argument; ///

    console.log(`Cloning '${releaseName}'...`);
  }
}

module.exports = clone;
