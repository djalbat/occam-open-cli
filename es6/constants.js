'use strict';

const CTRL_C = '\u0003',
      LINE_FEED = '\n',
      CARRIAGE_RETURN = '\r',
      BACKSPACE = String.fromCharCode(127),
      OPEN_MATHEMATICS_API_URL = 'http://localhost:8002/api/';

const constants = {
  CTRL_C: CTRL_C,
  LINE_FEED: LINE_FEED,
  CARRIAGE_RETURN: CARRIAGE_RETURN,
  BACKSPACE: BACKSPACE,
  OPEN_MATHEMATICS_API_URL: OPEN_MATHEMATICS_API_URL
};

module.exports = constants;