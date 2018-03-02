'use strict';

const request = require('request'),
      necessary = require('necessary');

const messages = require('./messages');

const { asynchronousUtilities, miscellaneousUtilities } = necessary,
      { rc, onETX } = miscellaneousUtilities,
      { whilst } = asynchronousUtilities,
      { exit } = process,
      { SERVER_ERROR_MESSAGE, SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE } = messages;

function action(callbacks, context, uri, callback) {
  Object.assign(context, {
    callbacks: callbacks
  });

  whilst(executeCallback, function() {
    const { abort } = context;

    if (abort) {
      exit();
    } else {
      delete context.callbacks;

      requestAction(context, uri, callback);
    }

  }, context);
}

module.exports = action;

function requestAction(context, uri, callback) {
  const { apiURL } = rc,
        url = `${apiURL}${uri}`,
        method = 'POST',
        encoding = 'utf8',
        timeout = 10000,
        form = context, ///
        options = {
          url : url,
          method : method,
          encoding: encoding,
          timeout: timeout,
          form: form
        },
        offETX = onETX(exit);

  request(options, function(error, response) {
    offETX();

    if (!response) {  ///
      console.log(SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE);
    } else {
      const { body } = response,
            json = JSON.parse(body),
            { error } = json;

      if (error) {
        const { message } = json;

        console.log(SERVER_ERROR_MESSAGE);

        console.log(message);
      } else {
        callback(json);
      }
    }

    exit(); ///
  });
}

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
    const abort = true;

    Object.assign(context, {
      abort: abort
    });

    done();
  }, context);
}
