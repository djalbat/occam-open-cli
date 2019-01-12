'use strict';

const os = require('os');

const constants = require('../constants'),
      packageUtilities = require('../utilities/package'),
      configurationUtilities = require('../utilities/configuration');

const { getVersionString } = packageUtilities,
			{ retrieveOptions } = configurationUtilities,
      { TIMEOUT, POST_METHOD, UTF8_ENCODING } = constants;

function optionsFromURIAndData(uri, data) {
	let options = retrieveOptions();

	const { hostURL } = options,
				url = `${hostURL}${uri}`,
				versionString = getVersionString(),
				body = Object.assign(data, {
					versionString
				}),
        json = true,
				timeout = TIMEOUT,
				method = POST_METHOD,
				encoding = UTF8_ENCODING,
				osType = os.type(),
				operatingSystem = osType, ///
				userAgent = `Open-CLI/${operatingSystem}`,
				headers = {
					'User-Agent': userAgent
				};

	options = {	///
		url,
		body,
    json,
		method,
		timeout,
		encoding,
		headers
	};

	return options;
}

module.exports = {
	optionsFromURIAndData
};
