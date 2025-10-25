"use strict";

import { END, DATA, EMPTY_STRING } from "../constants";

export function contentFromResponse(response, callback) {
  let content = EMPTY_STRING;

  response.on(DATA, (data) => {
    content += data;
  });

  response.on(END, () => {
    callback(content);
  });
}
