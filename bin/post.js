'use strict';

const request = require('request'),
      necessary = require('necessary');

const messages = require('./messages'),
			optionsUtilities = require('./utilities/options');

const { miscellaneousUtilities } = necessary,
			{ optionsFromURIAndData } = optionsUtilities,
      { exit } = process,
      { onETX } = miscellaneousUtilities,
      { SERVER_ERROR_MESSAGE, SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE } = messages;

function post(uri, data, callback) {
  const options = optionsFromURIAndData(uri, data),
				offETX = onETX(exit);

  request(options, function(error, response) {
    offETX && offETX(); ///

    if (error) {
      console.log(SERVER_FAILED_TO_RESPOND_ERROR_MESSAGE);

      exit();
    }

    const { body } = response,
          json = body,  ///
          { message } = json;

    if (message) {  ///
      console.log(message);
    }

    error = json.error; ///

    if (error) {
      console.log(SERVER_ERROR_MESSAGE);

      exit();
    }

    callback(json, function() {
    	exit();
		});
  });
}

module.exports = post;
