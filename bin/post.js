'use strict';

const os = require('os');

const request = require('request'),
      necessary = require('necessary');

const messages = require('./messages'),
      constants = require('./constants'),
      configuration = require('./configuration'),
      packageUtilities = require('./utilities/package');

const { miscellaneousUtilities } = necessary,
      { exit } = process,
      { onETX } = miscellaneousUtilities,
      { retrieveHostURL } = configuration,
      { getCurrentVersion } = packageUtilities,
      { OPEN_CLI, TIMEOUT, POST_METHOD, UTF8_ENCODING } = constants,
      { SERVER_ERROR_MESSAGE, SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE } = messages;

function post(uri, data, callback) {
  const options = optionsFromURIAndData(uri, data),
				offETX = onETX(exit);

  request(options, function(error, response) {
    offETX && offETX(); ///

    if (error) {
      console.log(SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE);

      exit();
    }

    const { body } = response,
          json = body,  ///
          { message } = json;

    if (message) {  ///
      console.log(message);
    }

    ({ error } = json); ///

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

function optionsFromURIAndData(uri, data) {
  const hostURL = retrieveHostURL(),
        url = `${hostURL}${uri}`,
        currentVersion = getCurrentVersion(),
        versionString = currentVersion, ///
        body = Object.assign(data, {
          versionString
        }),
        json = true,
        timeout = TIMEOUT,
        method = POST_METHOD,
        encoding = UTF8_ENCODING,
        osType = os.type(),
        operatingSystem = osType, ///
        userAgent = `${OPEN_CLI}/${operatingSystem}`,
        headers = {
          'User-Agent': userAgent
        },
        options = {	///
          url,
          body,
          json,
          method,
          timeout,
          encoding,
          headers
        };

  return options;
}
