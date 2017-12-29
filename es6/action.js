'use strict';

const request = require('request'),
      necessary = require('necessary');

const constants = require('./constants');

const { asynchronousUtilities } = necessary,
      { sequence } = asynchronousUtilities,
      { OPEN_MATHEMATICS_API_URL } = constants;

function action(callbacks, context, uri) {
  sequence(callbacks, function() {
    const url = `${OPEN_MATHEMATICS_API_URL}${uri}`,
          method = 'POST',
          encoding = null,
          options = {
            url : url,
            method : method,
            encoding: encoding
          };

    const connection = request(options, function(error, response) {
      process.exit();
    });

    connection.abort();
  }, context);
}

module.exports = action;
