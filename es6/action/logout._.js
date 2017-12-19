'use strict';

const action = require('../action');

function logout(username) {
  const context = {},
        uri = 'logout';

  action([], context, uri);
}

module.exports = logout;
