'use strict';

const request = require('request'),
      necessary = require('necessary');

const messages = require('./messages'),
      constants = require('./constants');

const { asynchronousUtilities, miscellaneousUtilities } = necessary,
      { sequence } = asynchronousUtilities,
      { rc, onETX } = miscellaneousUtilities,
      { serverFailedToRespondMessage } = messages;

function action(callbacks, context, uri, callback) {
  sequence(callbacks, function() {
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
          { exit } = process,
          offETX = onETX(exit);

    request(options, function(error, response) {
      offETX();

      if (!response) {  ///
        console.log(serverFailedToRespondMessage);
      } else {
        const { body } = response,
              json = JSON.parse(body),
              { error } = json;

        if (error) {
          const { message } = error;

          ///

        } else {
          callback(json);
        }
      }
    });
  }, context);
}

module.exports = action;
