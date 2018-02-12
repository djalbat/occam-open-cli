'use strict';

const action = require('../action');

function logout() {
  const callbacks = [],
        context = {},
        uri = 'logout';

  action(callbacks, context, uri);
}

module.exports = logout;
