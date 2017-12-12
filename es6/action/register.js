'use strict';

const prompt = require('prompt'),
      request = require('request'),
      necessary = require('necessary');

const URL = "http://localhost:8002/api/register"; ///

const { asynchronousUtilities } = necessary,
      { sequence } = asynchronousUtilities;

prompt.message = '';

function register(username) {
  let password,
      emailAddress;

  const callbacks = [
          usernameCallback,
          passwordCallback,
          confirmCallback,
          emailAddressCallback
        ];

  sequence(callbacks, function() {
    const url = URL,
          method = 'POST',
          encoding = null,
          params = {
            url : url,
            method : method,
            encoding: encoding
          };

    request(params, function(error, response) {
      console.log('!')
    });      
  });

  function usernameCallback(next, done) {
    if (username === null) {
      const schema = {
        properties: {
          username: {
            description: 'Username',
            type: 'string',
            pattern: /^[a-z0-9]{2,16}(?:-[a-z0-9]{2,16}){0,9}$/,
            message: `Usernames must consist of groups of at least two and no more than sixteen numbers or lowercase letters, separated by dashes.`,
            required: true
          }
        }
      };

      prompt.start();

      prompt.get(schema, function(error, result) {
        username = result.username;

        next();
      });
    } else {
      next();
    }
  }

  function passwordCallback(next, done) {
    const schema = {
      properties: {
        password: {
          description: 'Password',
          type: 'string',
          pattern: /^[a-zA-Z0-9!@#$%^&*_.,\-]{8,24}$/,
          message: `Passwords must consist of at least eight letters, numbers or common punctuation symbols.`,
          required: true,
          hidden: true
        }
      }
    };

    prompt.start();

    prompt.get(schema, function(error, result) {
      password = result.password;

      next();
    });
  }

  function confirmCallback(next, done) {
    const schema = {
      properties: {
        password: {
          description: 'Confirm password',
          type: 'string',
          pattern: /^[a-zA-Z0-9!@#$%^&*_.,\-]{8,24}$/,
          message: `Passwords must consist of sequences of at least eight letters, numbers or common punctation symbols.`,
          required: true,
          hidden: true
        }
      }
    };

    prompt.start();

    prompt.get(schema, function(error, result) {
      next();
    });
  }

  function emailAddressCallback(next, done) {
    const schema = {
      properties: {
        emailAddress: {
          description: 'Email address',
          type: 'string',
          pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,16}$/,
          message: `This does not appear to be a valid email address.`,
          required: true
        }
      }
    };

    prompt.start();

    prompt.get(schema, function(error, result) {
      emailAddress = result.emailAddress;

      next();
    });
  }
}

module.exports = register;
