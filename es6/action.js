'use strict';

const request = require('request'),
      necessary = require('necessary');

const escape = require('./escape'),
      constants = require('./constants');

const { asynchronousUtilities } = necessary,
      { sequence } = asynchronousUtilities,
      { OPEN_MATHEMATICS_API_URL } = constants;

function action(callbacks, context, uri, callback) {
  sequence(callbacks, function() {
    const url = `${OPEN_MATHEMATICS_API_URL}${uri}`,
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
          };

    escape();

    request(options, function(error, response) {
      const { body } = response,
            json = JSON.parse(body);

      callback(json);

      process.exit(); ///
    });
  }, context);
}

module.exports = action;
