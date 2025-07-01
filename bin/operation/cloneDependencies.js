"use strict";

const { exec } = require("child_process"),
      { Entries } = require("occam-entities"),
      { fileSystemUtilities, asynchronousUtilities } = require("necessary");

const { retrieveOptions } = require("../configuration"),
      { DEFAULT_GITHUB_HOST_NAME } = require("../defaults");

const { checkEntryExists } = fileSystemUtilities;

const { forEach } = asynchronousUtilities;

function cloneDependenciesOperation(proceed, abort, context) {
  const { releases } = context,
        done = proceed; ///

  forEach(releases, cloneDependencyPromptOperation, done, context);
}

module.exports = cloneDependenciesOperation;

function cloneDependencyPromptOperation(release, next, done, context, index) {
  const { dependencies } = context;

  if (!dependencies) {
    if (index > 0) {
      next();

      return;
    }
  }

  const { name, quietly } = release,
        entryPath = name, ///
        entryExists = checkEntryExists(entryPath);

  if (entryExists) {
    if (!quietly) {
      console.log(`Cannot clone the '${name}' package because a directory of that name already exists.`);
    }

    next();

    return;
  }

  done = next;  ///

  cloneRelease(release, quietly, done);
}

function cloneRelease(release, quietly, done) {
  let repository = repositoryFromRelease(release)

  const options = retrieveOptions(),
        { ssh } = options;

  if (ssh) {
    const { gitHubHostName } = ssh;

    repository = repository.replace(`https://${DEFAULT_GITHUB_HOST_NAME}/`, `git@${gitHubHostName}:`)
  }

  const command = `git clone ${repository}.git`;

  exec(command, (error) => {
    if (error) {
      console.log(error);
    }

    if (!quietly) {
      const { name } = release;

      console.log(name);
    }

    done();
  });
}

function repositoryFromRelease(release) {
  let { entries } = release;

  const json = entries; ///

  entries = Entries.fromJSON(json);

  const repository = entries.getRepository();

  return repository;
}
