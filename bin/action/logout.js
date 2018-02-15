'use strict';

const necessary = require('necessary')

const action = require('../action'),
      messages = require('../messages'),
      constants = require('../constants');

const { miscellaneousUtilities } = necessary,
      { rc } = miscellaneousUtilities,
      { readRCFile, updateRCFile } = rc,
      { LOGOUT_URI } = constants,
      { LOGGED_OUT_MESSAGE } = messages;

function logout() {
  const json = readRCFile(),
        { accessToken } = json;

  if (accessToken) {
    const callbacks = [],
          context = {
            accessToken: accessToken
          },
          uri = LOGOUT_URI;
    
    action(callbacks, context, uri, function(json) {
      console.log(LOGGED_OUT_MESSAGE);
    });
  } else {
    console.log(LOGGED_OUT_MESSAGE);
  }
}

module.exports = logout;
