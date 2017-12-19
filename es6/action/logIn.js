'use strict';

const request = require('request'),
      necessary = require('necessary');

const prompt = require('../prompt'),
      constants = require('../constants');

const { asynchronousUtilities } = necessary,
      { sequence } = asynchronousUtilities,
      { OPEN_MATHEMATICS_API_URL } = constants,
      URL = `${OPEN_MATHEMATICS_API_URL}login`;

function login(username) {

}

module.exports = login;
