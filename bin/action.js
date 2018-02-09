'use strict';

const request = require('request'),
      necessary = require('necessary');

const escape = require('./escape'),
      messages = require('./messages'),
      constants = require('./constants');

const { asynchronousUtilities, miscellaneousUtilities } = necessary,
      { sequence } = asynchronousUtilities,
      { rc } = miscellaneousUtilities,
      { serverFailedToRespondMessage } = messages,
      { apiURL } = rc;

function action(callbacks, context, uri, callback) {
  sequence(callbacks, function() {
    const url = `${apiURL}${uri}`,
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
      if (!response) {  ///
        console.log(serverFailedToRespondMessage);
      } else {
        const { body } = response,
              json = JSON.parse(body);

        callback(json);
      }

      process.exit(); ///
    });
  }, context);
}

module.exports = action;
