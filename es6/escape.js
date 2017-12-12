'use strict';

const constants = require('./constants');

const { ESCAPE_KEY } = constants;

function escape() {
  const stdin = process.stdin;

  if (stdin.setRawMode) {
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding('utf8');

    stdin.on('data', function(key){
      if (key === ESCAPE_KEY) {
        console.log();
        
        process.exit();
      }
    });
  }
}

module.exports = escape;