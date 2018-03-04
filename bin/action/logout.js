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
  const callbacks = [
          checkLoggedInCallback
        ],
        context = {},
        uri = LOGOUT_URI;

  action(callbacks, context, uri, function(json) {
    updateRCFile(null, 'accessToken');
      
    console.log(LOGGED_OUT_MESSAGE);
  });
}

module.exports = logout;
