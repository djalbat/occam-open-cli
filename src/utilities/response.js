"use strict";

import { END, DATA, UTF8 } from "../constants";

export function contentFromResponse(response, callback) {
  const chunks = [];

  response.on(DATA, (chunk) => {
    chunks.push(chunk);
  });

  response.on(END, () => {
    const content = Buffer
                      .concat(chunks)
                      .toString(UTF8);

    callback(content);
  });
}
