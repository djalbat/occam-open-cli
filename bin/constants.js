'use strict';

const ESCAPE_KEY = '\u001B',
      CTRL_C = '\u0003',
      LINE_FEED = '\n',
      CARRIAGE_RETURN = '\r',
      BACKSPACE = String.fromCharCode(127),
      LOGIN_URI = 'login',
      REGISTER_URI = 'register';

const constants = {
  ESCAPE_KEY: ESCAPE_KEY,
  CTRL_C: CTRL_C,
  LINE_FEED: LINE_FEED,
  CARRIAGE_RETURN: CARRIAGE_RETURN,
  BACKSPACE: BACKSPACE,
  LOGIN_URI: LOGIN_URI,
  REGISTER_URI: REGISTER_URI
};

module.exports = constants;
