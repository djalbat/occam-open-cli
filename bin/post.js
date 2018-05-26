'use strict';

const os = require('os'),
      request = require('request'),
      necessary = require('necessary');

const messages = require('./messages'),
      constants = require('./constants');

const { miscellaneousUtilities } = necessary,
      { rc, onETX } = miscellaneousUtilities,
      { versionString } = rc,
      { exit } = process,
      { HOST_URL, POST_METHOD, TIMEOUT, UTF_ENCODING } = constants,
      { SERVER_ERROR_MESSAGE, SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE } = messages;

function post(uri, data, callback) {
  const url = `${HOST_URL}${uri}`,
        form = Object.assign(data, {
          versionString: versionString
        }),
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

      exit();

    }

    const { body } = response;

    let json;

    try {
      json = JSON.parse(body);
    } catch (error) {
      console.log(SERVER_ERROR_MESSAGE);

      exit();
    }

    const { info, message } = json;

    if (info) { ///
      console.log(info);
    }

    if (message) {  ///
      console.log(message);
    }

    error = json.error; ///

    if (error) {
      console.log(SERVER_ERROR_MESSAGE);

      exit();
    }

    callback(json, function() {
      exit();
    });
  });
}

module.exports = post;
