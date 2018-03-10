'use strict';

const request = require('request'),
      necessary = require('necessary');

const messages = require('./messages');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
      { SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE } = messages;

function postMultipartData(uri, data, callback) {
  const { apiURL, timeout } = rc,
        url = `${apiURL}${uri}`,
        form = data, ///
        method = 'POST',  ///
        options = {
          url : url,
          form: form,
          method : method,
          timeout: timeout
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

module.exports = postMultipartData;
