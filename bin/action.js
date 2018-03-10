'use strict';

const necessary = require('necessary');

const messages = require('./messages'),
      executeCallbacks = require('./executeCallbacks'),
      postURLEncodedData = require('./postURLEncodedData');

const { miscellaneousUtilities } = necessary,
      { onETX } = miscellaneousUtilities,
      { exit } = process,
      { SERVER_ERROR_MESSAGE } = messages;

function action(callbacks, uri, callback, context) {
  executeCallbacks(callbacks, function(completed) {
    if (!completed) {
      exit();
    }

    const offETX = onETX(exit),
          data = context; ///

    postURLEncodedData(uri, data, function(json) {
      offETX();

      if (json !== null) {
        const { error } = json;

        error ?
          console.log(SERVER_ERROR_MESSAGE) :
            callback(json);
      }

      exit(); ///
    });
  }, context);
}

module.exports = action;
