'use strict';

const os = require('os');

const state = require('../state'),
			constants = require('../constants'),
			configurationUtilities = require('../utilities/configuration');

const { getVersionString } = state,
			{ retrieveOptions } = configurationUtilities,
      { TIMEOUT, POST_METHOD, UTF_ENCODING } = constants;

function optionsFromURIAndData(uri, data) {
	let options = retrieveOptions();

	const { hostURL } = options,
				url = `${hostURL}${uri}`,
				versionString = getVersionString(),
				form = Object.assign(data, {
					versionString
				}),
				timeout = TIMEOUT,
				method = POST_METHOD,
				encoding = UTF_ENCODING,
				osType = os.type(),
				operatingSystem = osType, ///
				userAgent = `Open-CLI/${operatingSystem}`,
				headers = {
					'User-Agent': userAgent
				};

	options = {	///
		url,
		form,
		method ,
		timeout,
		encoding,
		headers
	};

	return options;
}

module.exports = {
	optionsFromURIAndData
};
