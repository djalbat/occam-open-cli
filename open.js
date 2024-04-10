#!/usr/bin/env node

const { parseArgv } = require("argumentative"),
      { arrayUtilities } = require("necessary");

const actions = require("./bin/actions"),
      configure = require("./bin/configure"),
      abbreviations = require("./bin/abbreviations");

const { argv } = process,
      { first, second } = arrayUtilities;

const { commands, options } = parseArgv(argv, abbreviations),
      firstCommand = first(commands),
      secondCommand = second(commands),
      command = firstCommand || null, ///
      argument = secondCommand || null; ///

configure(command, argument, options, actions);
