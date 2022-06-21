"use strict";

const { Readable } = require("stream");
const { headers, contentTypes, requestUtilities } = require("necessary");

const { retrieveHostURL } = require("./configuration"),
      { getPackageVersion } = require("./utilities/packageJSON"),
      { contentFromResponse } = require("./utilities/response"),
      { SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE } = require("./messages");

const { createPostRequest } = requestUtilities,
      { CONTENT_TYPE_HEADER } = headers,
      { APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE } = contentTypes;

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
  const headers = {};

  headers[CONTENT_TYPE_HEADER] = APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE;

  return headers;
}

function getVersionString() {
  const packageVersion = getPackageVersion(),
        versionString = packageVersion; ///

  return versionString;
}
