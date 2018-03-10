'use strict';

function publish(argument) {
  if (argument === null) {
    console.log('You need to specify a package name.')
  } else {
    const packageName = argument; ///

    console.log(`Publishing '${packageName}'...`);
  }
}

module.exports = publish;
