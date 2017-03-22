'use strict';

const JSZip = require('jszip'),
      request = require('request');

class jsZip {
  static fromURL(url, callback) {
    const params = {
            method : "GET",
            url : url,
            encoding: null
          };

    request(params, function (error, response, body) {
      if(!error && (response.statusCode === 200)) {
        JSZip.loadAsync(body).then(function(jsZip) {
          callback(jsZip);
        });
      } else {
        callback(null);
      }
    });
  }
}

module.exports = jsZip;
