"use strict";

const os = require("os");

const { Readable } = require("stream");
const { shellUtilities, requestUtilities } = require("necessary");

const { retrieveHostURL } = require("./configuration"),
      { bodyFromResponse } = require("./utilities/response"),
      { getPackageVersion } = require("./utilities/packageJSON"),
      { SERVER_ERROR_MESSAGE, SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE } = require("./messages"),
      { USER_AGENT, CONTENT_TYPE, OCCAM_OPEN_CLI, APPLICATION_JSON_CHARSET_UTF_8 } = require("./constants");

const { onETX } = shellUtilities,
      { post: postEx } = requestUtilities;

function post(uri, data, callback) {
  const host = getHost(),
        userAgent = getUserAgent(),
        versionString = getVersionString(),
        json = Object.assign(data, {  ///
          versionString
        }),
        headers = {},
        content = JSON.stringify(json),
        parameters = {};

  headers[USER_AGENT] = userAgent;

  headers[CONTENT_TYPE] = APPLICATION_JSON_CHARSET_UTF_8;

  const offETX = onETX(process.exit),
        request = postEx(host, uri, parameters, headers, (error, response) => {
          offETX && offETX(); ///

          if (error) {
            console.log(SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE);

            process.exit(1);
          }

          bodyFromResponse(response, (body) => {
            let json;

            try {
              json = JSON.parse(body);
            } catch (error) {
              if (error) {
                console.log(SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE);

                process.exit(1);
              }
            }

            const { message } = json;

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
        }),
        readable = Readable.from(content);

  readable.pipe(request);
}

module.exports = post;

function getHost() {
  const hostURL = retrieveHostURL(),
        host = hostURL; ///

  return host;
}

function getUserAgent() {
  const osType = os.type(),
        operatingSystem = osType, ///
        userAgent = `${OCCAM_OPEN_CLI}/${operatingSystem}`;

  return userAgent;
}

function getVersionString() {
  const packageVersion = getPackageVersion(),
        versionString = packageVersion; ///

  return versionString;
}
