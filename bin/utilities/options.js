'use strict';

const os = require('os'),
      necessary = require('necessary');

const constants = require('./constants');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
      { versionString } = rc,
      { HOST_URL, TIMEOUT, POST_METHOD, UTF_ENCODING } = constants;

function optionsFromURIAndData(uri, data) {
	const url = `${HOST_URL}${uri}`,
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
				},
				options = {
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
