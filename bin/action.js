'use strict';

const request = require('request'),
      necessary = require('necessary');

const messages = require('./messages'),
      constants = require('./constants');

const { asynchronousUtilities, miscellaneousUtilities } = necessary,
      { sequence } = asynchronousUtilities,
      { rc, onETX } = miscellaneousUtilities,
      { SERVER_ERROR_MESSAGE, SERVER_FAILED_TO_RESPOND_ERROR_MESSSAGE } = messages;

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
          offETX = onETX(process.exit);

    request(options, function(error, response) {
      offETX();

      if (!response) {  ///
        console.log(SERVER_FAILED_TO_RESPOND_ERROR_MESSSAGE);
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

      process.exit(); ///
    });
  }, context);
}

module.exports = action;
