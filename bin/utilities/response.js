"use strict";

const { END, DATA, EMPTY_STRING } = require("../constants");

function contentFromResponse(response, callback) {
  let content = EMPTY_STRING;

  response.on(DATA, (data) => {
    content += data;
  });

  response.on(END, () => {
    callback(content);
  });
}

module.exports = {
  contentFromResponse
};
