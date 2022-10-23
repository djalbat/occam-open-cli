"use strict";

const { Readable } = require("stream"),
      { headers, contentTypes, statusCodes, statusMessages, requestUtilities } = require("necessary");

const { getHost } = require("./configuration"),
      { getPackageVersion } = require("./utilities/packageJSON"),
      { contentFromResponse } = require("./utilities/response"),
      { SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE } = require("./messages");

const { createPostRequest } = requestUtilities,
      { CONTENT_TYPE_HEADER } = headers,
      { APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE } = contentTypes,
      { BAD_GATEWAY_502_STATUS_CODE, INTERNAL_SERVER_ERROR_500_STATUS_CODE } = statusCodes,
      { BAD_GATEWAY_502_STATUS_MESSAGE, INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE } = statusMessages;

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

    if (statusCode === BAD_GATEWAY_502_STATUS_CODE) {
      console.log(`The server responded with '${BAD_GATEWAY_502_STATUS_MESSAGE}'.`);

      process.exit();
    }

    if (statusCode === INTERNAL_SERVER_ERROR_500_STATUS_CODE) {
      console.log(`The server responded with '${INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE}'.`);

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
