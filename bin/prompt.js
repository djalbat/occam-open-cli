'use strict';

const necessary = require('necessary');

const constants = require('./constants');

const { stdin, stdout } = process,
      { asynchronousUtilities } = necessary,
      { whilst } = asynchronousUtilities,
      { CTRL_C, LINE_FEED, CARRIAGE_RETURN, BACKSPACE } = constants;

function prompt(options, callback) {
  const value = null,
        context = Object.assign(options, {
          value: value
        });

  whilst(attempt, function() {
    const { value } = context;
    
    callback(value);
  }, context);
}

module.exports = prompt;

function attempt(next, done, context) {
  let { attempts } = context;

  const terminate = (attempts-- === 0);
  
  if (terminate) {
    done();
    
    return;
  }

  const { description, validationPattern, validationFunction, errorMessage, hidden } = context;

  hidden ? 
    hiddenInput(description, callback) :
      visibleInput(description, callback);

  function callback(value) {
    const valid = validationFunction ?  ///
                    validationFunction(value) :
                      validationPattern.test(value);

    if (valid) {
      Object.assign(context, {
        value: value
      });

      done();
    } else {
      console.log(errorMessage);

      Object.assign(context, {
        attempts: attempts
      });

      next();
    }
  }
}

function visibleInput(description, callback) {
  const encoding = 'utf8',
        rawMode = false;

  stdout.write(description);

  stdin.setEncoding(encoding);

  stdin.setRawMode(rawMode);

  stdin.resume();

  stdin.on('data', function (chunk) {
    const value = chunk.trim();

    stdin.removeAllListeners('data');

    stdin.pause();

    callback(value);
  });
}

function hiddenInput(description, callback) {
  const encoding = 'utf8',
        rawMode = true;

  stdout.write(description);

  stdin.setEncoding(encoding);

  stdin.setRawMode(rawMode);

  stdin.resume();

  let value = '';

  stdin.on('data', function (chunk) {
    const char = chunk.toString(encoding);

    switch (char) {
      case LINE_FEED :
      case CARRIAGE_RETURN :
        stdout.write(LINE_FEED);

        stdin.removeAllListeners('data');

        stdin.pause();

        callback(value);
        break;

      case CTRL_C :
        console.log();

        process.exit();
        break;

      case BACKSPACE :
        value = truncate(value);

        stdout.clearLine();

        stdout.cursorTo(0);

        stdout.write(description);
        break;

      default:
        value += char;
        break;
    }
  });
}

function truncate(value) { return value.slice(0, value.length - 1); }
