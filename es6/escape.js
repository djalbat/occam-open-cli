'use strict';

const constants = require('./constants');

const { stdin } = process,
      { ESCAPE_KEY } = constants;

function escape() {
  if (stdin.setRawMode) {
    const rawMode = true,
          encoding = 'utf8';

    stdin.setRawMode(rawMode);
    stdin.resume();
    stdin.setEncoding(encoding);

    stdin.on('data', function(key) {
      console.log(key)
      
      if (key === ESCAPE_KEY) {
        process.exit();
      }
    });
  }
}

module.exports = escape;
