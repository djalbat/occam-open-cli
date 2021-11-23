"use strict";

const os = require("os");

const { Readable } = require("stream");
const { requestUtilities } = require("necessary");

const { retrieveHostURL } = require("./configuration"),
      { getPackageVersion } = require("./utilities/packageJSON"),
      { contentFromResponse } = require("./utilities/response"),
      { USER_AGENT, CONTENT_TYPE, OPEN_CLI } = require("./constants"),
      { APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE } = require("./contentTypes"),
      { SERVER_ERROR_MESSAGE, SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE } = require("./messages");

const { createPostRequest } = requestUtilities;

function post(uri, data, callback) {
  const host = getHost(),
        headers = getHeaders(),
        versionString = getVersionString(),
        json = Object.assign(data, {  ///
          versionString
        }),
        content = JSON.stringify(json),
        query = {},
        postRequest = createPostRequest(host, uri, query, headers, (error, response) => {
          if (error) {
            console.log(SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE);

            process.exit(1);
          }

          contentFromResponse(response, (content) => {
            let json;

            try {
              const jsonString = content; ///

              json = JSON.parse(jsonString);
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

  readable.pipe(postRequest);
}

module.exports = post;

function getHost() {
  const hostURL = retrieveHostURL(),
        host = hostURL; ///

  return host;
}

function getHeaders() {
  const headers = {},
        userAgent = getUserAgent();

  headers[USER_AGENT] = userAgent;

  headers[CONTENT_TYPE] = APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE;

  return headers;
}

function getUserAgent() {
  const osType = os.type(),
        operatingSystem = osType, ///
        userAgent = `${OPEN_CLI}/${operatingSystem}`;

  return userAgent;
}

function getVersionString() {
  const packageVersion = getPackageVersion(),
        versionString = packageVersion; ///

  return versionString;
}
