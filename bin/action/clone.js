'use strict';

const action = require('../action'),
      messages = require('../messages'),
      constants = require('../constants'),
      cloneRepository = require('../cloneRepository'),
      releaseNamePromptCallback = require('../callback/prompt/releaseName');

const { CLONE_URI } = constants,
      { FAILED_CLONE_MESSAGE, SUCCESSFUL_CLONE_MESSAGE } = messages;

function clone(argument) {
  const releaseName = argument,  ///
        name = releaseName, ///
        uri = CLONE_URI,
        callbacks = [
          releaseNamePromptCallback
        ],
        context = {
          name: name
        };

  action(callbacks, uri, function(json, done) {
    const { releaseExists } = json;

    if (!releaseExists) {
      console.log(FAILED_CLONE_MESSAGE);

      done();

      return;
    }

    const { repository } = json;

    cloneRepository(repository, function(success) {
      success ?
        console.log(SUCCESSFUL_CLONE_MESSAGE) :
          console.log(FAILED_CLONE_MESSAGE);

      done();
    });
  }, context);
}

module.exports = clone;
