"use strict";

const { Readable } = require("stream"),
      { headers, contentTypes, statusCodes, requestUtilities } = require("necessary");

const { getHost } = require("./configuration"),
      { getPackageVersion } = require("./utilities/packageJSON"),
      { contentFromResponse } = require("./utilities/response"),
      { statusMessageFromStatusCode } = require("./utilities/status"),
      { SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE } = require("./messages");

const { createPostRequest } = requestUtilities,
      { OK_200_STATUS_CODE } = statusCodes,
      { CONTENT_TYPE_HEADER } = headers,
      { APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE } = contentTypes;

function post(uri, json, callback) {
  const host = getHost(),
        query = {},
        headers = getHeaders(),
        content = JSON.stringify(json), ///
        versionString = getVersionString();

  Object.assign(json, {
    versionString
  });

  const postRequest = createPostRequest(host, uri, query, headers, (error, response) => {
    if (error) {
      console.log(SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE);

      process.exit();
    }

    const { statusCode } = response;

    if (statusCode !== OK_200_STATUS_CODE) {
      const statusMessage = statusMessageFromStatusCode(statusCode);

      console.log(`The server responded with '${statusMessage}'.`);

      process.exit();
    }

    contentFromResponse(response, (content) => {
      let json;

      try {
        const jsonString = content; ///

        json = JSON.parse(jsonString);
      } catch (error) {
        if (error) {
          console.log(SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE);

          process.exit();
        }
      }

      callback(json);
    });
  });

  const readable = Readable.from(content);

  readable.pipe(postRequest);
}

module.exports = post;

function getHeaders() {
  const headers = {};

  headers[CONTENT_TYPE_HEADER] = APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE;

  return headers;
}

function getVersionString() {
  const packageVersion = getPackageVersion(),
        versionString = packageVersion; ///

  return versionString;
}
