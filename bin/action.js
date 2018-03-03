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

      const offETX = onETX(exit),
            { apiURL, method, encoding, timeout } = rc,
            url = `${apiURL}${uri}`,
            form = context, ///
            options = {
              url : url,
              form: form,
              method : method,
              encoding: encoding,
              timeout: timeout
            };

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

  }, context);
}

module.exports = action;

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
