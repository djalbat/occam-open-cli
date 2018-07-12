'use strict';

const necessary = require('necessary');

const state = require('../../state'),
      validate = require('../../validate'),
      messages = require('../../messages');

const { miscellaneousUtilities } = necessary,
      { validateReleaseName } = validate,
      { getReleaseName } = state,
      { prompt } = miscellaneousUtilities,
      { INVALID_RELEASE_NAME_MESSAGE } = messages;

function releaseNamePromptCallback(proceed, abort, context) {
  const releaseName = getReleaseName(),
				errorMessage = INVALID_RELEASE_NAME_MESSAGE;

  if (releaseName !== null) {
    const valid = validateReleaseName(releaseName);

    if (valid) {
			Object.assign(context, {
				releaseName
			});

      proceed();
      
      return;
    } else {
      console.log(errorMessage);
    }
  }

  const description = 'Package name: ',
        validationFunction = validateReleaseName, ///
        options = {
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, function(releaseName) {
    const valid = (releaseName !== null);

    if (valid) {
      Object.assign(context, {
        releaseName
      });

      proceed();
      
      return;
    }

    abort();
  });
}

module.exports = releaseNamePromptCallback;
