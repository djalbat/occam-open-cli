"use strict";

import { Readable } from "stream";
import { headers, contentTypes, statusCodes, requestUtilities, packageUtilities } from "necessary";

import { retrieveHost } from "./configuration";
import { contentFromResponse } from "./utilities/response";
import { statusMessageFromStatusCode } from "./utilities/status";
import { SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE } from "./messages";

const { getVersion } = packageUtilities,
      { createPostRequest } = requestUtilities,
      { OK_200_STATUS_CODE } = statusCodes,
      { CONTENT_TYPE_HEADER } = headers,
      { APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE } = contentTypes;

export default function post(uri, json, callback) {
  const host = retrieveHost(),
        query = {},
        headers = {
          [ CONTENT_TYPE_HEADER ]: APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE
        },
        version = getVersion(),
        content = JSON.stringify(json), ///
        versionString = version;  ///

  Object.assign(json, {
    versionString
  });

  const postRequest = createPostRequest(host, uri, query, headers, (error, response) => {
    if (error) {
      console.log(SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE);

      return;
    }

    contentFromResponse(response, (content) => {
      let json = null;

      try {
        const jsonString = content; ///

        json = JSON.parse(jsonString);
      } catch (error) {
        if (error) {
          console.log(SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE);
        }
      }

      const { statusCode } = response;

      if (statusCode !== OK_200_STATUS_CODE) {
        const statusMessage = statusMessageFromStatusCode(statusCode);

        console.log(`The server responded with '${statusMessage}'.`);

        const { messages = [] } = json;

        messages.forEach((message) => {
          console.log(message);
        });

        return;
      }

      callback(json);
    });
  });

  const readable = Readable.from(content);

  readable.pipe(postRequest);
}
