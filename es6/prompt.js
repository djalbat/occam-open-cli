'use strict';

const necessary = require('necessary');

const { stdin, stdout } = process,
      { asynchronousUtilities } = necessary,
      { whilst } = asynchronousUtilities;    

stdin.setEncoding('utf8');

function prompt(description, validationPattern, errorMessage, attempts, callback) {
  const value = null,
        context = {
          description: description,
          validationPattern: validationPattern,
          errorMessage: errorMessage,
          attempts: attempts,
          value: value
        };

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

  const { description, validationPattern, errorMessage } = context;

  stdout.write(description);

  stdin.resume();

  stdin.on('data', function (data) {
    const value = data.trim(),
          valid = validationPattern.test(value);

    stdin.removeAllListeners('data');

    stdin.pause();

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
  });
}
