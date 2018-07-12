'use strict';

const necessary = require('necessary');

const { asynchronousUtilities } = necessary,
      { whilst } = asynchronousUtilities;

function executeCallbacks(callbacks, callback, context) {
  const completed = true;

  Object.assign(context, {
    callbacks: callbacks,
    completed: completed
  });

  whilst(executeCallback, function() {
    const { completed } = context;

    delete context.callbacks;

    delete context.completed;

    callback(completed);
  }, context);
}

module.exports = {
	executeCallbacks
};

function executeCallback(next, done, context, index) {
  const { callbacks } = context,
        callbacksLength = callbacks.length,
        lastOperationIndex = callbacksLength - 1;

  if (index > lastOperationIndex) {
    done();

    return;
  }

  const callback = callbacks[index],
        proceed = next; ///

  callback(proceed, function() {
    const completed = false;

    Object.assign(context, {
      completed: completed
    });

    done();
  }, context);
}
