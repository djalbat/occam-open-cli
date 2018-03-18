'use strict';

function install(argument) {
  if (argument === null) {
    console.log('You need to specify a package name.')
  } else {
    const releaseName = argument; ///

    console.log(`Installing '${releaseName}'...`);
  }
}

module.exports = install;
