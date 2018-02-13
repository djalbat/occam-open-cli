'use strict';

const constants = require('../constants');

function install(argument) {
  if (argument === null) {
    console.log('You need to specify a package name.')
  } else {
    const packageName = argument; ///

    console.log(`Installing '${packageName}'...`);
  }
}

module.exports = install;
