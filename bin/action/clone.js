'use strict';

const uris = require('../uris'),
      action = require('../action'),
      messages = require('../messages'),
      cloneRepository = require('../cloneRepository'),
      releaseNamePromptCallback = require('../callback/prompt/releaseName');

const { exit } = process,
      { CLONE_URI } = uris,
      { FAILED_CLONE_MESSAGE, SUCCESSFUL_CLONE_MESSAGE } = messages;

function clone(argument) {
  const releaseName = argument,  ///
        name = releaseName, ///
        uri = CLONE_URI,
        callbacks = [
          releaseNamePromptCallback
        ],
        context = {
          name
        };

  action(callbacks, uri, (json) => {
    const { exists } = json;

    if (!exists) {
      console.log(FAILED_CLONE_MESSAGE);

      exit();
    }

    const { repository } = json;

    cloneRepository(repository, (success) => {
      success ?
        console.log(SUCCESSFUL_CLONE_MESSAGE) :
          console.log(FAILED_CLONE_MESSAGE);

      exit();
    });
  }, context);
}

module.exports = clone;
