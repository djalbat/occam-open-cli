'use strict';

const action = require('../action'),
      messages = require('../messages'),
      constants = require('../constants'),
      checkLoggedInCallback = require('../callback/checkLoggedIn'),
      passwordPromptCallback = require('../callback/prompt/password'),
      areYouSurePromptCallback = require('../callback/prompt/areYouSure'),
      releaseNamePromptCallback = require('../callback/prompt/releaseName');

const { DEPRECATE_URI } = constants,
      { FAILED_DEPRECATE_MESSAGE, SUCCESSFUL_DEPRECATE_MESSAGE } = messages;

function deprecate(argument) {
  const releaseName = argument,  ///
        password = null,
        uri = DEPRECATE_URI,
        callbacks = [
          checkLoggedInCallback,
          releaseNamePromptCallback,
          passwordPromptCallback,
          areYouSurePromptCallback
        ],
        context = {
          password,
          releaseName
        };

  action(callbacks, uri, function(json, done) {
    const { success } = json;

    success ?
      console.log(SUCCESSFUL_DEPRECATE_MESSAGE) :
        console.log(FAILED_DEPRECATE_MESSAGE);

    done();
  }, context);
}

module.exports = deprecate;
