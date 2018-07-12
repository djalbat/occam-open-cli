'use strict';

const necessary = require('necessary');

const validate = require('../../validate'),
      messages = require('../../messages');

const { miscellaneousUtilities } = necessary,
      { validateHostNameSuffix } = validate,
      { prompt } = miscellaneousUtilities,
      { INVALID_HOST_NAME_SUFFIX_MESSAGE } = messages;

function hostNameSuffixPromptCallback(proceed, abort, context) {
  const description = 'Host name suffix: ',
        errorMessage = INVALID_HOST_NAME_SUFFIX_MESSAGE,
        validationFunction = validateHostNameSuffix,  ///
        options = {
          description,
          errorMessage,
          validationFunction
        };

  prompt(options, function(hostNameSuffix) {
    const valid = (hostNameSuffix !== null);

    if (valid) {
      Object.assign(context, {
        hostNameSuffix
      });

      proceed();
      
      return;
    }

    abort();
  });
}

module.exports = hostNameSuffixPromptCallback;
