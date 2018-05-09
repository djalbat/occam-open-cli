'use strict';

const os = require('os'),
      request = require('request'),
      necessary = require('necessary');

const messages = require('./messages'),
      constants = require('./constants');

const { miscellaneousUtilities } = necessary,
      { onETX } = miscellaneousUtilities,
      { exit } = process,
      { HOST_URL, POST_METHOD, TIMEOUT, UTF_ENCODING } = constants,
      { SERVER_ERROR_MESSAGE, SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE } = messages;

function post(uri, data, callback) {
  const url = `${HOST_URL}${uri}`,
        form = data, ///
        timeout = TIMEOUT,
        method = POST_METHOD,
        encoding = UTF_ENCODING,
        osType = os.type(),
        operatingSystem = osType, ///
        headers = {
          'User-Agent': `Open-CLI/${operatingSystem}`
        },
        options = {
          url : url,
          form: form,
          method : method,
          timeout: timeout,
          encoding: encoding,
          headers: headers
        };

  const offETX = onETX(exit);

  request(options, function(error, response) {
    offETX && offETX(); ///

    if (error) {
      console.log(SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE);
    } else {
      try {
        const { body } = response,
              json = JSON.parse(body);

        const { info, message, error } = json;

        if (info) { ///
          console.log(info);
        }

        if (message) {  ///
          console.log(message);
        }

        error ?
          console.log(SERVER_ERROR_MESSAGE) :
            callback(json);
      } catch (error) {
        console.log(SERVER_ERROR_MESSAGE);
      }
    }

    exit();
  });
}

module.exports = post;
