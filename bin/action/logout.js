'use strict';

const action = require('../action');

function logout() {
  const context = {},
        uri = 'logout';

  action([], context, uri);
}

module.exports = logout;
