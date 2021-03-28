"use strict";

const os = require("os"),
      request = require("request");

const { shellUtilities } = require("necessary");

const { retrieveHostURL } = require("./configuration"),
      { getPackageVersion } = require("./utilities/packageJSON"),
      { OCCAM_OPEN_CLI, TIMEOUT, POST_METHOD, UTF8_ENCODING } = require("./constants"),
      { SERVER_ERROR_MESSAGE, SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE } = require("./messages");

const { onETX } = shellUtilities;

function post(uri, data, callback) {
  const options = optionsFromURIAndData(uri, data),
				offETX = onETX(process.exit);

  request(options, (error, response) => {
    offETX && offETX(); ///

    if (error) {
      console.log(SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE);

      process.exit(1);
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

      process.exit(1);
    }

    callback(json);
  });
}

module.exports = post;

function optionsFromURIAndData(uri, data) {
  const hostURL = retrieveHostURL(),
        url = `${hostURL}${uri}`,
        packageVersion = getPackageVersion(),
        versionString = packageVersion, ///
        body = Object.assign(data, {
          versionString
        }),
        json = true,
        timeout = TIMEOUT,
        method = POST_METHOD,
        encoding = UTF8_ENCODING,
        osType = os.type(),
        operatingSystem = osType, ///
        userAgent = `${OCCAM_OPEN_CLI}/${operatingSystem}`,
        headers = {
          "User-Agent" : userAgent
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
