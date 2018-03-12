'use strict';

const request = require('request');

const messages = require('./messages'),
      constants = require('./constants');

const { SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE } = messages,
      { API_URL, API_METHOD, API_TIMEOUT, API_ENCODING } = constants;

function post(uri, data, callback) {
  const url = `${API_URL}${uri}`,
        form = data, ///
        method = API_METHOD,
        timeout = API_TIMEOUT,
        encoding = API_ENCODING,
        options = {
          url : url,
          form: form,
          method : method,
          timeout: timeout,
          encoding: encoding
        };

  request(options, function(error, response) {
    let json;

    if (error) {
      console.log(SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE);

      json = null;
    } else {
      const { body } = response;

      json = JSON.parse(body);
    }

    callback(json);
  });
}

module.exports = post;
