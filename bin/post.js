"use strict";

const { Readable } = require("stream");
const { headers, statusCodes, contentTypes, requestUtilities } = require("necessary");

const { getHostURL } = require("./configuration"),
      { getPackageVersion } = require("./utilities/packageJSON"),
      { contentFromResponse } = require("./utilities/response"),
      { SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE } = require("./messages");

const { createPostRequest } = requestUtilities,
      { OK_200_STATUS_CODE } = statusCodes,
      { CONTENT_TYPE_HEADER } = headers,
      { APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE } = contentTypes;

function post(uri, json, callback) {
  const host = getHost(),
        headers = getHeaders(),
        versionString = getVersionString();

        Object.assign(json, {
          versionString
        });

  const content = JSON.stringify(json), ///
        query = {},
        postRequest = createPostRequest(host, uri, query, headers, (error, response) => {
          if (error) {
            console.log(SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE);

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
        }),
        readable = Readable.from(content);

  readable.pipe(postRequest);
}

module.exports = post;

function getHost() {
  const hostURL = getHostURL(),
        host = hostURL; ///

  return host;
}

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
