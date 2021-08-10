"use strict";

const { END, DATA, EMPTY_STRING } = require("../constants");

function bodyFromResponse(response, callback) {
  let body = EMPTY_STRING;

  response.on(DATA, (data) => {
    body += data;
  });

  response.on(END, () => {
    callback(body);
  });
}

module.exports = {
  bodyFromResponse
};
