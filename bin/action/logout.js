'use strict';

const necessary = require('necessary');

const action = require('../action'),
      messages = require('../messages'),
      constants = require('../constants'),
      checkLoggedInCallback = require('../callback/checkLoggedIn');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
      { updateRCFile } = rc,
      { LOGOUT_URI } = constants,
      { LOGGED_OUT_MESSAGE } = messages;

function logout() {
  const uri = LOGOUT_URI,
        callbacks = [
          checkLoggedInCallback
        ],
        context = {};

  action(callbacks, uri, function(json) {
    updateRCFile(null, 'accessToken');
      
    console.log(LOGGED_OUT_MESSAGE);
  }, context);
}

module.exports = logout;
