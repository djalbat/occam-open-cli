'use strict';

const request = require('request'),
      necessary = require('necessary');

const escape = require('./escape'),
      constants = require('./constants');

const { asynchronousUtilities } = necessary,
      { sequence } = asynchronousUtilities,
      { OPEN_MATHEMATICS_API_URL } = constants;

function action(callbacks, context, uri) {
  sequence(callbacks, function() {
    const url = `${OPEN_MATHEMATICS_API_URL}${uri}`,
          method = 'POST',
          encoding = null,
          timeout = 10000,
          options = {
            url : url,
            method : method,
            encoding: encoding,
            timeout: timeout
          };

    escape();

    request(options, function(error, response) {
      ///
    });
  }, context);
}

module.exports = action;
