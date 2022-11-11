#!/usr/bin/env node

const { parseArgv } = require("argumentative"),
      { arrayUtilities } = require("necessary");

const main = require("./bin/main"),
      abbreviations = require("./bin/abbreviations");

const { argv } = process,
      { first, second } = arrayUtilities;

const { commands, options } = parseArgv(argv, abbreviations),
      firstCommand = first(commands),
      secondCommand = second(commands),
      command = firstCommand || null, ///
      argument = secondCommand || null; ///

main(command, argument, options);
